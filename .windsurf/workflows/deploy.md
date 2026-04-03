---
description: Deploy the Next.js application to production
deploying this sea buckthorn news website
---

## Deploy Workflow

1. Build the application
// turbo
   ```bash
   npm run build
   ```

2. Check for any build errors
   - Review the console output for warnings or errors
   - Ensure all images are properly optimized

3. Verify the production build locally (optional)
// turbo
   ```bash
   npm start
   ```

4. Deploy to your hosting platform:
   - **Vercel**: Connect your GitHub repo and push to main branch
   - **Netlify**: Drag and drop the `.next` folder or use CLI
   - **Custom server**: Upload the `.next` folder and run `npm start`

5. Verify deployment
   - Check all pages load correctly
   - Test navigation and filters
   - Verify images display properly
