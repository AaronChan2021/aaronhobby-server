# 开发环境

npm run dev

# 生产环境部署

npm install
npx prisma generate
npm run build
// 服务器需安装 pm2
pm2 start ecosystem.config.js --env production
