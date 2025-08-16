# Simple CI Pipeline Setup Guide

This repository includes a simple CI pipeline using GitHub Actions for automated code quality checks.

## 🚀 Pipeline Overview

### Code Quality Check (`ci.yml`)
- **Triggers**: Push to `main`/`develop`, Pull requests to `main`
- **Node.js version**: 20.x
- **Steps**:
  - Code checkout
  - Dependencies installation
  - ESLint code quality checks
  - Build verification

## 🔧 What the Pipeline Does

### ✅ **ESLint Check**
- Runs `npm run lint` to check your code for:
  - Syntax errors
  - Code style issues
  - Potential bugs
  - Best practice violations

### ✅ **Build Check**
- Runs `npm run build` to ensure:
  - Your Next.js app compiles successfully
  - No runtime errors during build
  - All dependencies are properly resolved
  - Production build can be created

## 📋 Workflow Status Badge

Add this to your main README.md:

```markdown
![Code Quality Check](https://github.com/aman-prasad1/my-porfolio/workflows/Code%20Quality%20Check/badge.svg)
```

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run linting (same as CI)
npm run lint

# Build for production (same as CI)
npm run build

# Start production server
npm start
```

## � Automated Dependency Updates

The repository also includes Dependabot configuration for:
- **Weekly npm package updates** (Mondays at 9 AM)
- **Weekly GitHub Actions updates** (Mondays at 9 AM)
- **Automatic pull requests** with proper labels

## 🚨 Troubleshooting

### Common Issues:

1. **ESLint failures**: 
   - Run `npm run lint` locally to see errors
   - Fix linting issues in your code
   
2. **Build failures**: 
   - Run `npm run build` locally to reproduce
   - Check for TypeScript errors or missing dependencies
   
3. **Dependency issues**: 
   - Clear `node_modules` and run `npm install`
   - Check for conflicting package versions

### Getting Help:

- Check workflow logs in GitHub Actions tab
- Run the same commands locally: `npm run lint` and `npm run build`
- Ensure all dependencies are properly installed
