module.exports = {
  apps: [
    {
      name: 'aaronhobby-server',
      script: 'dist/server.js',
      env_production: {
        NODE_ENV: 'production',
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET
      },
      env_development: {
        NODE_ENV: 'development',
        DATABASE_URL: process.env.DATABASE_URL,
        JWT_SECRET: process.env.JWT_SECRET
      }
    }
  ]
}
