//getlist user prisma
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const dynamic = 'auto';
export const dynamicParams = true;
export const revalidate = false;
export const fetchCache = 'only-no-store';
export const runtime = 'nodejs';
export const preferredRegion = 'auto';

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json({ users }, { status: 200 });
}
//getlist user prisma
