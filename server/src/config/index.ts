import dotenv from 'dotenv'

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
  port: parseInt(process.env.PORT || '5000', 10),
  origin: process.env.ORIGIN,
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}
