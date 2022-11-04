import { PrismaClient } from '@prisma/client'

type PostTweetParams = {
  text: string
  publicatedAt: Date
}

export default async function postTweet (
  params: PostTweetParams
  ): Promise<void> {
  const prisma = new PrismaClient()

  await prisma.tweet.create({ data: params })
}
