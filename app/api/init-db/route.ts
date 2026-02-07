import { NextResponse } from 'next/server';
import { createWaitlistTable } from '@/lib/db';

export async function GET() {
  try {
    await createWaitlistTable();
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}