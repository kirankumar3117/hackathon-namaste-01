import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const reservationItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().min(1),
  priceAtReservation: z.number().min(0)
});

const reservationSchema = z.object({
  shopId: z.string(),
  items: z.array(reservationItemSchema).min(1),
  totalAmount: z.number().min(0)
});

export async function POST(req: Request) {
  try {
    const userId = req.headers.get('x-user-id');
    const userRole = req.headers.get('x-user-role');

    if (!userId || userRole !== 'CUSTOMER') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const validatedData = reservationSchema.parse(body);

    const reservation = await prisma.reservation.create({
      data: {
        customerId: userId,
        shopId: validatedData.shopId,
        totalAmount: validatedData.totalAmount,
        status: 'PENDING',
        items: {
          create: validatedData.items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            priceAtReservation: item.priceAtReservation
          }))
        }
      },
      include: {
        items: true,
        shop: {
          select: { name: true, address: true }
        }
      }
    });

    return NextResponse.json({ message: 'Reservation created successfully', reservation }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const userId = req.headers.get('x-user-id');
    const userRole = req.headers.get('x-user-role');

    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let reservations;

    if (userRole === 'CUSTOMER') {
      reservations = await prisma.reservation.findMany({
        where: { customerId: userId },
        include: {
          shop: { select: { name: true, image: true, phone: true } },
          items: { include: { product: { select: { name: true, image: true } } } }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else if (userRole === 'SHOP_OWNER') {
      // Find shop owned by user
      const shop = await prisma.shop.findUnique({ where: { ownerId: userId } });
      if (!shop) {
        return NextResponse.json({ error: 'Shop not found' }, { status: 404 });
      }
      
      reservations = await prisma.reservation.findMany({
        where: { shopId: shop.id },
        include: {
          customer: { select: { name: true, phone: true } },
          items: { include: { product: { select: { name: true, image: true } } } }
        },
        orderBy: { createdAt: 'desc' }
      });
    } else {
      // ADMIN
      reservations = await prisma.reservation.findMany({
        include: {
          shop: { select: { name: true } },
          customer: { select: { name: true } }
        },
        orderBy: { createdAt: 'desc' },
        take: 50
      });
    }

    return NextResponse.json({ reservations }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
