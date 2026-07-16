# 🚀 Deployment Guide: Kart Mithra

This guide covers how to deploy the Kart Mithra MVP to production using Vercel (for the frontend/API) and Supabase/Neon (for the PostgreSQL Database).

## 1. Database Setup (Supabase / Neon)
1. Go to [Supabase](https://supabase.com/) or [Neon](https://neon.tech/) and create a new project.
2. Once the project is provisioned, locate your **PostgreSQL Connection String** (URI). 
   - Make sure it looks like this: `postgresql://user:password@host:port/database?schema=public`.
   - *Note: If using Supabase, ensure you use the Transaction connection pooler for serverless environments (usually port `6543`).*

## 2. Pushing the Database Schema
Before deploying the code, you need to push the Prisma schema to your remote database.
1. In your local terminal, temporarily set your `.env` file's `DATABASE_URL` to your remote connection string.
2. Run the following command to push the schema:
   ```bash
   npx prisma db push
   ```
3. Your database is now ready!

## 3. Vercel Deployment
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Go to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your repository.
4. **Environment Variables**:
   In the Vercel deployment settings, add the following Environment Variables:
   - `DATABASE_URL`: Your remote PostgreSQL connection string.
   - `JWT_SECRET`: A strong, random string (e.g., generate one using `openssl rand -base64 32`).
5. **Build Command**:
   The `package.json` has already been updated so the build command will automatically run:
   ```bash
   npm run build
   ```
   *(This runs `prisma generate && next build` automatically).*
6. Click **Deploy**.

## 4. Post-Deployment Checks
- **PWA**: Open the deployed URL on your mobile browser (Safari/Chrome) and select "Add to Home Screen" to test the PWA functionality.
- **Admin Setup**: Register a new user on the deployed site. To make this user an `ADMIN`, you'll need to manually change their role in your database (via Supabase Studio or a SQL GUI tool like DBeaver/TablePlus) since the registration API defaults to `CUSTOMER`. 

---
**Congratulations on launching Kart Mithra! 🎉**
