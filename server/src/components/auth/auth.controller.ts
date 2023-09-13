import ServerError from 'core/instances/ServerError'
import { Request, Response } from 'express'
import httpStatus from 'http-status'

const loginUser = async (req: Request, res: Response) => {
  try {
    // LOGIC
  } catch (error) {
    if (error instanceof ServerError) {
      res.status(error.code || 502)
      res.json({ error: error.message })
    } else {
      res.status(httpStatus.INTERNAL_SERVER_ERROR)
      res.json({ error: 'Internal server error' })
    }
  }
}

export { loginUser }
