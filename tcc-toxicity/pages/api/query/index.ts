import { StatusCodes } from 'http-status-codes'
import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import onError from '../../../lib/common/on-error'
import getCurrentQueryString from '../../../lib/services/get-current-query-string'
import postQueryString from '../../../lib/services/post-query-string'

export default nextConnect<NextApiRequest, NextApiResponse>({ onError })
  .get(async (_req, res) => {
    const data = await getCurrentQueryString()

    res.status(StatusCodes.OK).json(data)
  })
  .post(async (req, res) => {
    await postQueryString(req.body)

    res.status(StatusCodes.OK).end()
  })
