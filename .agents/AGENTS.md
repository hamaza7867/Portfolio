# Workspace Rules

- **CI/CD Pipeline Integration**: Both the Next.js frontend (Cloudflare Pages) and the email handler Cloudflare Worker (`contact-worker/`) are fully integrated into a CI/CD pipeline on GitHub. 
- **Auto-deployment**: Any commit pushed to the `main` branch of the GitHub repository `https://github.com/hamaza7867/Portfolio.git` automatically triggers builds and deployments for both the Pages website and the Worker. There is no need to manually deploy wrangler or vercel projects.
