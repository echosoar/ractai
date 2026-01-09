# GitHub Pages Setup Instructions

This repository is configured to host a static website at https://ractai.com using GitHub Pages.

## Files Created

1. **index.html** - The main static website page with a modern, responsive design
2. **CNAME** - Contains the custom domain name (ractai.com)
3. **.nojekyll** - Tells GitHub Pages not to use Jekyll processing
4. **.github/workflows/deploy.yml** - GitHub Actions workflow for automatic deployment

## Setup Steps Required

After merging this PR, you need to complete the following steps:

### 1. Enable GitHub Pages in Repository Settings

1. Go to your repository: https://github.com/echosoar/ractai
2. Click on **Settings** (top navigation)
3. Click on **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions** as the deployment method
5. Save the settings

### 2. Configure Custom Domain (ractai.com)

The CNAME file is already in place, but you need to:

1. Configure DNS records for your domain at your domain registrar:
   - Add an **A record** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - OR add a **CNAME record** pointing to: `echosoar.github.io`

2. In the GitHub Pages settings (Settings > Pages):
   - The custom domain should show: `ractai.com`
   - Check "Enforce HTTPS" once DNS is configured

### 3. Merge this PR

Once you merge this PR to the main branch (or master), the GitHub Actions workflow will automatically:
- Build and deploy the site to GitHub Pages
- Make it available at https://ractai.com (once DNS is configured)

### 4. Verify Deployment

After merging:
1. Go to the **Actions** tab in your repository
2. Check that the "Deploy to GitHub Pages" workflow runs successfully
3. Visit https://echosoar.github.io/ractai (GitHub Pages default URL)
4. Once DNS propagates, visit https://ractai.com

## DNS Propagation Time

Please note that DNS changes can take anywhere from a few minutes to 48 hours to fully propagate worldwide.

## Troubleshooting

- **404 Error**: Make sure GitHub Pages is enabled and the workflow has run successfully
- **Custom domain not working**: Check DNS settings and wait for propagation
- **SSL Certificate issues**: Wait 24 hours after DNS configuration for GitHub to provision SSL

## Workflow Triggers

The site will automatically redeploy when:
- You push changes to the main/master branch
- You manually trigger the workflow from the Actions tab

## Updating the Website

To update the website content:
1. Edit `index.html` file
2. Commit and push to the main/master branch
3. GitHub Actions will automatically redeploy the site
