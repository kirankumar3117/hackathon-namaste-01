import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const scanSchema = z.object({
  text: z.string().min(1, 'Please provide a grocery list text'),
  city: z.string().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedData = scanSchema.parse(body);
    
    // 1. Extract products from text (Mocking AI extraction with basic string splitting)
    // In a real MVP, this would call OpenAI or Gemini API
    const extractedItems = validatedData.text
      .split(/\n|,/)
      .map(item => item.trim())
      .filter(item => item.length > 0);
      
    if (extractedItems.length === 0) {
      return NextResponse.json({ error: 'No items found in the list' }, { status: 400 });
    }

    // 2. Find nearby stores (filtered by city if provided)
    const stores = await prisma.shop.findMany({
      where: {
        isActive: true,
        ...(validatedData.city && { city: { contains: validatedData.city, mode: 'insensitive' } })
      },
      include: {
        products: {
          where: { isAvailable: true }
        }
      }
    });

    // 3. Match products in stores
    const storeMatches = stores.map(store => {
      let matchedCount = 0;
      const matchedProducts: { originalItem: string; product: typeof stores[0]['products'][0] }[] = [];
      const missingItems: string[] = [];
      
      extractedItems.forEach(item => {
        // Simple case-insensitive matching
        const productMatch = store.products.find(p => 
          p.name.toLowerCase().includes(item.toLowerCase()) || 
          item.toLowerCase().includes(p.name.toLowerCase())
        );
        
        if (productMatch) {
          matchedCount++;
          matchedProducts.push({
            originalItem: item,
            product: productMatch
          });
        } else {
          missingItems.push(item);
        }
      });
      
      return {
        store: {
          id: store.id,
          name: store.name,
          address: store.address,
          image: store.image,
          city: store.city
        },
        matchedCount,
        totalItems: extractedItems.length,
        matchPercentage: (matchedCount / extractedItems.length) * 100,
        matchedProducts,
        missingItems
      };
    });

    // 4. Sort by highest match percentage
    const sortedMatches = storeMatches
      .filter(match => match.matchedCount > 0)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);

    return NextResponse.json({ 
      extractedItems,
      bestMatch: sortedMatches.length > 0 ? sortedMatches[0] : null,
      alternativeStores: sortedMatches.slice(1, 4)
    }, { status: 200 });

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
