// src/routes/auth.routes.ts - 认证路由
import { Router } from 'express'
import { login, register } from '../controllers/auth.controller'
import {
  validateLogin,
  validateRegister
} from '../middleware/validation.middleware'

const router = Router()

router.post('/login', validateLogin, login)
router.post('/register', validateRegister, register)

export const authRouter = router
