---
slug: "auto-deploy-sapper-app-github-actions"
title: "Automatically deploy your Sapper app to GitHub Pages with GitHub Actions"
date: "September 3, 2020"
---

this is a sample blog post.

```yaml
name: Build and Deploy
on:
  push:
    branches:
      - develop # Replace with name of your main branch
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Use Node.js '12.x'
        uses: actions/setup-node@v1
        with:
          node-version: "12.x"
      - run: npm install
      - run: npm run export
      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.GITHUB }}
          BRANCH: master # Replace with name of branch deployed to GH Pages
          FOLDER: __sapper__/export
```
