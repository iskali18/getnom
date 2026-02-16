# GetNom - Quick Start Guide

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## 3️⃣ Edit Content

**To edit cuisine pages:**
- Go to `content/cuisines/`
- Edit `.md` files (they're just text files)
- Use the markdown symbols from README

**To add images:**
- Download from Unsplash or Pexels
- Put them in `public/images/`
- Reference in markdown: `![Alt text](/images/filename.jpg)`

## 4️⃣ Deploy

1. Push to GitHub
2. Connect to Vercel
3. Done! Vercel auto-deploys on every push.

---

## What You Need to Learn

**Markdown symbols (8 things):**
```markdown
# Heading 1
## Heading 2
### Heading 3

**bold**
*italic*

- Bullet point

[link](url)
![image](/images/pic.jpg)

---
```

That's literally all you need to know.

---

## Your Workflow

1. Edit `.md` files in `content/cuisines/`
2. Add images to `public/images/`
3. `git push` to GitHub
4. Vercel deploys automatically

---

## Files You Edit

✅ Edit these:
- `content/cuisines/*.md` (cuisine content)
- `public/images/` (add your photos here)

❌ Don't touch:
- Anything else (unless you know React)

---

## Need Help?

Read the full README.md for detailed instructions.
