# Deploying GetNom to Vercel

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial GetNom site"

# Create GitHub repository and push
# (Follow GitHub's instructions to create repo and add remote)
git remote add origin https://github.com/YOUR-USERNAME/getnom.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to https://vercel.com
2. Sign up/login with GitHub
3. Click "Add New Project"
4. Import your `getnom` repository
5. Vercel will auto-detect Next.js
6. Click "Deploy"

**That's it!** Your site will be live in ~2 minutes.

### 3. Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `getnom.com`
4. Update your domain's DNS settings (Vercel shows exact records)

---

## Auto-Deployment

Every time you push to GitHub:
```bash
git add .
git commit -m "Updated content"
git push
```

Vercel automatically rebuilds and deploys (takes ~2 min).

---

## Vercel Settings

You don't need to configure anything—Vercel detects Next.js automatically.

**Build Command:** `npm run build` (automatic)  
**Output Directory:** `.next` (automatic)  
**Install Command:** `npm install` (automatic)

---

## What Vercel Does

1. Detects Next.js project
2. Runs `npm install`
3. Runs `npm run build`
4. Deploys to CDN
5. Gives you a URL (e.g., `getnom.vercel.app`)

---

## Environment Variables

GetNom doesn't need any environment variables currently.

If you add API integrations later:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Add your keys
3. They're automatically injected during build

---

## Cost

**Vercel Free Tier includes:**
- Unlimited deployments
- Automatic HTTPS
- Global CDN
- 100GB bandwidth/month
- Custom domain support

Perfect for GetNom's MVP and beyond.
