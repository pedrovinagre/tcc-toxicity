import * as yup from 'yup'
import { PrismaClient } from '@prisma/client'
import Tweet from '../types/tweet'

type GetTweetsPageParams = {
  pageNumber?: number
  pageSize?: number
}

export default async function getTweetsPage (
  params: GetTweetsPageParams
  ): Promise<Tweet[]> {
    const prisma = new PrismaClient()

    const schema = yup.object().shape({
      pageNumber: yup.number().integer().optional().min(0).default(0),
      pageSize: yup.number().integer().optional().min(1).default(10)
    })

    const { pageNumber, pageSize } = await schema.validate(params)

    const data = await prisma.tweet.findMany({
      skip: pageNumber * pageSize,
      take: pageSize
    })

    return data
}
