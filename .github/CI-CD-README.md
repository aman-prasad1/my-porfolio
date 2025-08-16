# CI/CD Pipeline Setup Guide

This repository includes a comprehensive CI/CD pipeline using GitHub Actions for automated testing, building, and deployment.

## 🚀 Pipeline Overview

### CI Pipeline (`ci.yml`)
- **Triggers**: Push to `main`/`develop`, Pull requests to `main`
- **Node.js versions**: 18.x, 20.x (matrix strategy)
- **Steps**:
  - Code checkout
  - Dependencies installation
  - ESLint checks
  - Build verification
  - Artifact upload

### Deployment Pipeline (`deploy.yml`)
- **Triggers**: Push to `main` branch (after CI success)
- **Target**: Vercel (production deployment)
- **Steps**:
  - Build verification
  - Production deployment to Vercel

### Preview Deployment (`preview.yml`)
- **Triggers**: Pull requests to `main`
- **Target**: Vercel (preview deployment)
- **Features**: Automatic PR comments with preview links

### Security & Quality (`security.yml`)
- **Triggers**: Push, PR, Weekly schedule
- **Features**:
  - NPM security audit
  - CodeQL security analysis
  - Dependency vulnerability scanning

## 🔧 Setup Instructions

### 1. Vercel Deployment Setup

1. Create a [Vercel](https://vercel.com) account
2. Connect your GitHub repository to Vercel
3. Get the required secrets:
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Login and get project info
   vercel login
   vercel link
   ```

4. Add these secrets to your GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Add repository secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

### 2. Alternative: GitHub Pages Deployment

If you prefer GitHub Pages over Vercel:

1. Uncomment the `github-pages.yml` workflow
2. Comment out or delete the Vercel workflows
3. Enable GitHub Pages in repository settings
4. Update `next.config.mjs` for static export:
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   export default nextConfig
   ```

### 3. Customize Dependabot

Update `.github/dependabot.yml`:
- Replace `amanprasad` with your GitHub username
- Adjust schedule and settings as needed

## 📋 Workflow Status Badges

Add these to your main README.md:

```markdown
![CI Pipeline](https://github.com/YOUR_USERNAME/my-portfolio/workflows/CI%20Pipeline/badge.svg)
![Deploy to Vercel](https://github.com/YOUR_USERNAME/my-portfolio/workflows/Deploy%20to%20Vercel/badge.svg)
![Code Quality & Security](https://github.com/YOUR_USERNAME/my-portfolio/workflows/Code%20Quality%20&%20Security/badge.svg)
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 🔒 Security Features

- **Automated dependency updates** via Dependabot
- **Security vulnerability scanning** via npm audit
- **Code quality analysis** via CodeQL
- **Weekly security scans** scheduled runs

## 📈 Monitoring & Maintenance

- Monitor workflow runs in the Actions tab
- Review Dependabot PRs weekly
- Check security alerts in the Security tab
- Update workflow versions quarterly

## 🚨 Troubleshooting

### Common Issues:

1. **Build failures**: Check Node.js version compatibility
2. **Deployment issues**: Verify Vercel secrets are correct
3. **Linting errors**: Run `npm run lint` locally first
4. **Dependency conflicts**: Clear `node_modules` and reinstall

### Getting Help:

- Check workflow logs in GitHub Actions
- Review Vercel deployment logs
- Ensure all required secrets are set
- Verify branch protection rules if needed
