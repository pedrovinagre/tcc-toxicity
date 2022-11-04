import { StatusCodes } from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import onError from '../../../lib/common/on-error'
import getTweetsPage from '../../../lib/services/get-tweets-page'
import postTweet from '../../../lib/services/post-tweet'

export default nextConnect<NextApiRequest, NextApiResponse>({ onError })
  .get(async (req, res) => {
    const data = await getTweetsPage(req.query)

    res.status(StatusCodes.OK).json(data)
  })
  .post(async (req, res) => {
    await postTweet(req.body)

    res.status(StatusCodes.OK).end()
  })
