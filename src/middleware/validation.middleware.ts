// src/middleware/validation.middleware.ts - 验证中间件
import { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/error'

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new AppError('Email and password are required', 400)
  }

  // 简单的邮箱格式验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new AppError('Invalid email format', 400)
  }

  next()
}

export const validateRegister = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    throw new AppError('Email, password and name are required', 400)
  }

  // 邮箱格式验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw new AppError('Invalid email format', 400)
  }

  // 密码强度验证
  if (password.length < 6) {
    throw new AppError('Password must be at least 6 characters long', 400)
  }

  next()
}
