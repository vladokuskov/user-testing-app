import express, { Router } from 'express'
import authRoutes from 'components/auth/auth.router'

const router: Router = Router()

router.use(express.json())
router.use('/auth', authRoutes)

export default router
