# GetNom - Global Food Discovery Site

A website that helps people understand cuisines and dishes so they know what to order before trying something new.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Deploy to Vercel

1. Push this code to GitHub
2. Connect your GitHub repo to Vercel
3. Vercel will automatically detect Next.js and deploy

---

## 📁 Project Structure

```
getnom/
├── app/                    # Pages and layouts
│   ├── layout.tsx         # Site header, footer, navigation
│   ├── page.tsx           # Homepage
│   ├── cuisines/          # Cuisine pages
│   │   ├── page.tsx       # Cuisines index
│   │   └── [slug]/        # Individual cuisine pages
│   └── explore/           # Explore Foods pages
│       ├── page.tsx       # Explore index
│       └── [slug]/        # Individual food pages
├── content/               # ⭐ YOU EDIT THESE FILES
│   ├── cuisines/         # Markdown files for each cuisine
│   │   ├── thai.md
│   │   ├── indian.md
│   │   ├── japanese.md
│   │   ├── vietnamese.md
│   │   ├── mexican.md
│   │   └── bbq.md
│   └── explore/          # Markdown files for explore foods
│       └── (create these files)
├── public/
│   └── images/           # ⭐ PUT YOUR IMAGES HERE
└── lib/
    └── markdown.ts       # Markdown processing (don't touch)
```

---

## ✏️ How to Edit Content

### Adding/Editing Cuisine Pages

1. Go to `content/cuisines/`
2. Edit existing `.md` files or create new ones
3. Follow this format:

```markdown
---
title: Thai Cuisine
emoji: 🇹🇭
description: Balance of sweet, sour, salty, and spicy
---

# Thai Cuisine

## Flavor Profile

Write your overview here...

---

## 🟢 Beginner Dishes

### Pad Thai
Description here...

**What to expect:** Simple description

---

## 🟡 Intermediate Dishes

### Green Curry
Description here...

---

## 🔴 Adventurous Dishes

### Larb
Description here...

---

## Ordering Tips

- Tip one
- Tip two
```

### Adding Images

1. Download images from Unsplash or Pexels
2. Name them descriptively (e.g., `pad-thai.jpg`, `thai-hero.jpg`)
3. Put them in `public/images/`
4. Reference in markdown: `![Description](/images/filename.jpg)`

---

## 📸 Image Guidelines

### Where to Get Images

**Unsplash** (unsplash.com)  
- Free, high-quality
- Search for specific dishes
- No signup required (but recommended)

**Pexels** (pexels.com)  
- Free, commercial use
- Good food photography
- Similar to Unsplash

### Image Naming

✅ Good:
- `thai-hero.jpg` (main cuisine page image)
- `pad-thai.jpg` (specific dish)
- `green-curry.jpg`

❌ Avoid:
- `IMG_1234.jpg`
- `photo-1234567890.jpg`
- `untitled.jpg`

---

## 📝 Markdown Cheat Sheet

You only need to know these 8 things:

```markdown
# Heading 1 (page title)
## Heading 2 (sections)
### Heading 3 (subsections)

**bold text**
*italic text*

- Bullet point
- Another bullet

[link text](https://url.com)

![image description](/images/image.jpg)

---  (horizontal line separator)
```

That's it!

---

## 🆕 Adding a New Cuisine

1. Create new file: `content/cuisines/italian.md`
2. Copy structure from `thai.md` or `indian.md`
3. Edit the content
4. Add images to `public/images/`
5. Update homepage: Edit `app/page.tsx` (add to `cuisines` array)

---

## 🌎 Adding Explore Foods Pages

1. Create new file: `content/explore/curries.md`
2. Use same markdown format as cuisine pages
3. Images go in `public/images/`
4. Update explore page: Edit `app/explore/page.tsx`

---

## 🔧 Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production (Vercel does this automatically)
npm run start     # Run production build locally
```

---

## 🚀 Deployment Workflow

Your workflow after initial setup:

1. **Edit content** in `content/cuisines/` or `content/explore/`
2. **Add images** to `public/images/`
3. **Commit to GitHub:**
   ```bash
   git add .
   git commit -m "Updated Thai cuisine page"
   git push
   ```
4. **Vercel automatically deploys** (takes ~2 minutes)

---

## ⚠️ Files You Should NEVER Edit

- `lib/markdown.ts`
- `next.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `package.json`
- Anything in `app/` unless you know React

**You only edit:**
- Files in `content/`
- Images in `public/images/`
- Optionally: `app/page.tsx` and `app/cuisines/page.tsx` to add new cuisines to homepage

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#f97316',    // Orange
  secondary: '#ea580c',  // Darker orange
}
```

### Change Site Title

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'GetNom - Your New Title',
  description: 'Your new description',
}
```

---

## 🐛 Troubleshooting

**Issue:** Site won't build  
**Fix:** Run `npm install` again

**Issue:** Images not showing  
**Fix:** Make sure images are in `public/images/` and paths start with `/images/`

**Issue:** New cuisine not appearing  
**Fix:** Check filename is `.md` and in correct folder

**Issue:** Markdown not rendering  
**Fix:** Make sure you have the `---` front matter at the top

---

## 📧 Need Help?

If you get stuck:
1. Check the markdown format matches existing files
2. Make sure images are in the right folder
3. Run `npm run dev` and check browser console for errors

---

## 🎯 Next Steps (Phase 2)

After completing 6 cuisines:
1. Create Explore Foods pages (curries, noodles, soups, sandwiches)
2. Add more images
3. Consider adding search functionality
4. Plan monetization (affiliates, ads)
