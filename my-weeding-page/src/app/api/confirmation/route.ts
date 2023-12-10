import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, phone, isFemale, isMale, numberOfGuests, confirmChoice } =
    await request.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      phone,
      isFemale,
      isMale,
      numberOfGuests,
      confirmChoice,
    },
  });

  return NextResponse.json({ users: newUser, success: true }, { status: 200 });
}
