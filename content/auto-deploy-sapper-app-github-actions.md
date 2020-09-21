---
slug: "auto-deploy-sapper-app-github-actions"
title: "Automatically deploy your Sapper app to GitHub Pages with GitHub Actions"
date: "September 3, 2020"
---

<img src="https://lh3.googleusercontent.com/pw/ACtC-3fWiXqjaUtfEJTfeA4pwqST95J1eKtbnWqej7LM2-qDSSf60c0C4v_Cka9sbJJZN4-2kcf_i-ISPS1NZsLNo2C_IMryToOE6X8KJnntfafwv62nCoyjVLDNbfhCYyrwtS5pw3_gZ5UhcNzPiH8X_74=w880-h440-no?authuser=0" alt="drawing" width="800"/>

Recently, I decided to update my personal website and blog. I like to learn new things through personal projects so I decided to use [Sapper](https://sapper.svelte.dev/), a server-side rendered framework for [Svelte](https://svelte.dev/).

After building my Sapper blog, I deployed it to GitHub Pages manually by running a script to push the compiled code to the branch deployed on my GitHub Pages site. But there were a few times when I forgot to deploy changes and found the manual process cumbersome. Enter GitHub Actions.

## What are GitHub Actions?

GitHub Actions allow you to automate parts of your workflow directly from GitHub. Setting up a GitHub Action to automatically deploy changes to your Sapper app to GitHub Pages is really easy!

To create a build and deploy actions, first you'll need to generate a Personal Access Token and save it in your secrets.

Go [here](https://github.com/settings/tokens) to generate a token

The go to your repository, select **'Settings'** and then **'Secrets'** from the left hand menu. There you can store the token you just created. I went with 'GITHUB' as the name for my secret but you can name it whatever you want.

Next create a `.github` directory in your project and in it a `workflows` directory with a `main.yml` file.

Here's the script to copy into the main.yml file:

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

A few things to note, I work off the `develop` branch and have `master` deployed to GitHub Pages. In the above script, replace the values with your branch names.

And that's it! 🎉 Now when you push changes to your main branch, they'll automatically be deployed to GitHub Pages.
