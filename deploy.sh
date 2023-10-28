#!/usr/bin/env sh
# abort on error s
set -e
# build
npm run build
# navigate into the build output director y
cd dist
# if you are deploying to a custom domain
# echo 'vmw.example.com' > CNAME
git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com: jppinedal/my-vue-app.git main:gh-pages
cd - 