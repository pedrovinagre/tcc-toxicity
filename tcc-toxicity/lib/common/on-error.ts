import { NextApiRequest, NextApiResponse } from 'next'
import { NextHandler } from 'next-connect'
import { ValidationError } from 'yup'

export default async function onError (
  err: any,
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) {
  if (err instanceof ValidationError) {
    res.status(400).json({ errors: err.errors, message: err.message })
  } else if (err.statusCode) {
    res.status(err.statusCode).json({ message: err.message })
  } else {
    res.status(500).json({ message: 'Internal server error' })
  }
}
