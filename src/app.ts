// src/app.ts - 应用程序入口
import express from 'express'

import cors from 'cors'
import { authRouter } from './routes/auth.routes'
import { errorHandler } from './middleware/error.middleware'

const app = express()

app.use(cors())
app.use(express.json())

// 路由
app.use('/api/auth', authRouter)

// 错误处理
app.use(errorHandler)

export default app
