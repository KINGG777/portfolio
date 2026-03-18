# My Portfolio Wesbite - Overview 🚀

This repository contains the open source version of my porfolio website.
Do check it out!

## Instructions 🛠️


### 1. Push to GitHub
If you haven't already, initialize git and push to your repository:
```bash
git init
git add .
git commit -m "Initial portfolio commit with updated details"
git branch -M main
# Create a new repository on GitHub and run the following command with your repo URL:
git remote add origin https://github.com/your-username/your-repo-name.git
git push -u origin main
```

### 2. Deploy to Vercel (Easiest)
Vercel is the most seamless way to deploy a Vite React app.
1. Sign up/Log in to [Vercel](https://vercel.com/).
2. Click **Add New Project**.
3. Import the GitHub repository you just pushed.
4. Vercel will auto-detect Vite. The Build Command should be `npm run build` and Output Directory should be `dist`.
5. Click **Deploy**. Your site will be live in a minute!

### 3. Deploy to Netlify (Alternative)
1. Sign up/Log in to [Netlify](https://netlify.com/).
2. Go to **Add new site** > **Import an existing project** > **GitHub**.
3. Select your repository.
4. Build settings: 
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click **Deploy site**.

**Techstack** - React, TypeScript, GSAP, ThreeJS, WebGL, HTML, CSS, JavaScript

![Portfolio-Preview](public/images/preview.png)

## License

This project is open source and available under the [MIT License](LICENSE).
