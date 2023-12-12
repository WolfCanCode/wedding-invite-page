import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

function generateRandomNumber(digits) {
  var randomNumber = "";
  for (var i = 0; i < digits; i++) {
    randomNumber += Math.floor(Math.random() * 10).toString();
  }
  return randomNumber;
}

export async function POST(request: Request) {
  const { name, phone, isFemale, isMale, numberOfGuests, confirmChoice } =
    await request.json();

  // const existingUser = await prisma.user.findFirst({
  //   where: {
  //     phone,
  //   },
  // });
  // if (existingUser) {
  //   const updateUser = await prisma.user.update({
  //     where: {
  //       id: existingUser.id,
  //     },
  //     data: {
  //       name,
  //       isFemale,
  //       isMale,
  //       numberOfGuests,
  //       confirmChoice,
  //     },
  //   });
  //   return NextResponse.json(
  //     { users: updateUser, success: true },
  //     { status: 200 }
  //   );
  // }
  const newUser = await prisma.user.create({
    data: {
      name,
      phone: generateRandomNumber(12),
      isFemale,
      isMale,
      numberOfGuests,
      confirmChoice,
    },
  });

  return NextResponse.json({ users: newUser, success: true }, { status: 200 });
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}
