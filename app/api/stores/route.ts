import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  try {
    const stores = await prisma.shop.findMany({
      where: city ? { city: { contains: city, mode: 'insensitive' }, isActive: true } : { isActive: true },
      include: {
        _count: {
          select: { products: true }
        }
      }
    });

    return NextResponse.json({ stores }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch stores' }, { status: 500 });
  }
}
