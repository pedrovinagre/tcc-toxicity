import { PrismaClient } from '@prisma/client'
import QueryString from '../types/query-string'

export default async function getCurrentQueryString ()
: Promise<QueryString | null> {
  const prisma = new PrismaClient()

  const data = await prisma.queryString.findFirst({
    orderBy: {
      createdAt: 'desc'
    }
  })

  return data
}
