import { NextResponse } from 'next/server'

import db from '@/db/drizzle'
import { isAdmin } from '@/lib/admin'
import { userProgress } from '@/db/schema' 

export const GET = async () => {
    if (!isAdmin()) {
      return new NextResponse('Unauthorized', { status: 401 });
    }
  
    const data = await db.query.userProgress.findMany()
  
    // Asegúrate de que cada objeto tenga una propiedad `id`
    const formattedData = data.map(item => ({
      ...item,
      id: item.userId, // O cualquier otro campo que sea el identificador
    }));
  
    return NextResponse.json(formattedData);
  }
  
export const POST = async (req: Request) => {
  if (!isAdmin()) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const body = await req.json()

  const data = await db
    .insert(userProgress)
    .values({
      ...body
    })
    .returning()

  return NextResponse.json(data[0])
}
