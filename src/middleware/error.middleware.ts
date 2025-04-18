// src/middleware/error.middleware.ts - 错误处理中间件
import express, { Request, Response, NextFunction } from 'express'
import { AppError } from '../utils/error'

export const errorHandler = (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  // 记录错误信息
  console.error('Error:', err.message)
  console.error('Stack trace:', err.stack)

  // 检查是否为自定义错误
  if (err instanceof AppError) {
    const statusCode = err.statusCode
    res.status(statusCode).json({
      error: {
        message: err.message,
        status: statusCode
      }
    })
  } else {
    // 处理其他类型的错误
    const statusCode = 500
    res.status(statusCode).json({
      error: {
        message: err.message || 'Internal Server Error',
        status: statusCode
      }
    })
  }
}
