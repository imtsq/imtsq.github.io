# 确保脚本出错时停止执行
set -e

# 打包
pnpm docs:build
# 进入dist目录
cd ./docs/.vuepress/dist
# 生成静态文件
echo "Building VuePress site..."
# pnpm run build

git init
git remote add origin git@github.com:imtsq/imtsq.github.io.git
git checkout -b gh-pages
git add .
git commit -m "Deploy VuePress site"
git push origin gh-pages --force