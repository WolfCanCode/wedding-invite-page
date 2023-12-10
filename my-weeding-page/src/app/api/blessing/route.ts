import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, content } = await request.json();

  const newBlessing = await prisma.blessing.create({
    data: {
      name,
      content,
    },
  });

  return NextResponse.json(
    { blessing: newBlessing, success: true },
    { status: 200 }
  );
}

export async function GET() {
  const blessings = await prisma.blessing.findMany();
  return NextResponse.json({ blessings }, { status: 200 });
}
