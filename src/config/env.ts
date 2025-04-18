export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000
}
