# 开发环境

npm run dev

# 生产环境部署

npm install
npx prisma generate
npm run build
// 服务器需安装 pm2
pm2 start ecosystem.config.js --env production
// 查看日志
pm2 logs aaronnhobby-server
// 停止，删除所有pm2进程
pm2 stop all
pm2 delete all