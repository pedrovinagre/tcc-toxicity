import { PrismaClient } from '@prisma/client'

type PostQueryStringParams = {
  query: string
}

export default async function postQueryString (
  params: PostQueryStringParams
  ): Promise<void> {
  const prisma = new PrismaClient()

  await prisma.queryString.create({ data: params })
}
