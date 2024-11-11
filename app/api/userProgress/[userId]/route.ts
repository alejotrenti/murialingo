import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

import db from '@/db/drizzle'
import { userProgress } from '@/db/schema'
import { isAdmin } from '@/lib/admin'

export const GET = async (
  req: Request,
  { params }: { params: { userId: string } }
) => {
  if (!isAdmin()) {
    return new NextResponse('Unauthorized', { status: 403 })
  }

  const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, params.userId)
  })

  return NextResponse.json(data)
}
