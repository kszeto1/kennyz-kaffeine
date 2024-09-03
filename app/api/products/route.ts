import products from '@/data/products-data';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(products);
}