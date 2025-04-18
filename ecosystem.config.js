// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'aaronhobby-server',
      script: './dist/server.js',
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT,
        // 确保这些环境变量与 .env 文件中的一致
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET
      },
      error_file: 'logs/err.log', // 错误日志路径
      out_file: 'logs/out.log', // 输出日志路径
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      instances: 1,
      exec_mode: 'fork',
      max_memory_restart: '500M'
    }
  ]
}
