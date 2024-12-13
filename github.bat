# 确保脚本出错时停止执行
set -e

# 打包
pnpm docs:build
# 进入dist目录
cd ./docs/.vuepress/dist
# 生成静态文件
echo "Building VuePress site..."
# 将dist推送到GitHub gh-pages分支
git init
git remote add origin git@github.com:imtsq/imtsq.github.io.git
git checkout -b gh-pages
git add .
git commit -m "Deploy VuePress site"
# 强制推送
git push origin gh-pages --force


echo "........"
cd ../../..
rmdir /s /q .\docs\.vuepress\dist
# 将源文件上传GitHub main分支
git init
git remote add origin git@github.com:imtsq/imtsq.github.io.git
git checkout -b main
git add .
git commit -m "blog source"
git push origin main --force
pause
