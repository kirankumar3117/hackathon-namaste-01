import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const shopId = searchParams.get('shopId');
  const categoryId = searchParams.get('categoryId');
  const search = searchParams.get('search');

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(shopId && { shopId }),
        ...(categoryId && { categoryId }),
        ...(search && { name: { contains: search, mode: 'insensitive' } }),
        isAvailable: true,
      },
      include: {
        category: true,
        shop: {
          select: { name: true, city: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
