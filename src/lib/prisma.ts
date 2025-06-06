import { PrismaClient } from '@prisma/client'

// 防止开发环境下热重载创建多个实例
declare global {
  var prisma: PrismaClient | undefined
}

export const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
