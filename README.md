# ⚡ LeadHunter Pro — Shopify & WordPress Lead Generation Tool

A powerful lead generation and outreach tool built for Shopify & WordPress freelancers targeting clients in USA, UK, Australia, and Canada.

---

## 🚀 Features

- 🔍 **Lead Finder** — Search leads by country, platform, industry, company size
- 🎯 **Lead Scoring** — Auto-scores every lead 0–100, only shows 70+ (hot leads)
- 📧 **AI Outreach Generator** — Cold emails, LinkedIn DMs, WhatsApp, Follow-up sequences
- 📋 **Built-in CRM** — Track leads from New → Contacted → Replied → Won
- 📊 **Analytics Dashboard** — Pipeline overview, insights by country/platform
- 💡 **Client Insights** — Pain points for Shopify & WordPress clients
- 🎯 **Conversion Guide** — Step-by-step blueprint to close clients
- 💾 **CSV Export** — Export all leads anytime

---

## 📁 File Structure

```
leadhunter/
├── public/
│   └── index.html        ← Main app (entire UI)
├── api/
│   ├── apollo.js         ← Apollo.io proxy (serverless)
│   ├── hunter.js         ← Hunter.io proxy (serverless)
│   ├── search.js         ← Google Search proxy (serverless)
│   └── outreach.js       ← Claude AI outreach generator
├── vercel.json           ← Vercel configuration
└── README.md             ← This file
```

---

## 🛠️ Deployment on Vercel (Step-by-Step)

### Step 1: Create GitHub Account
1. Go to **github.com** → Sign up free
2. Click **"New repository"**
3. Name it: `leadhunter-pro`
4. Set to **Public** → Click **Create repository**

### Step 2: Upload Files to GitHub
1. Click **"uploading an existing file"** in your new repo
2. Upload ALL files maintaining this folder structure:
   - `public/index.html`
   - `api/apollo.js`
   - `api/hunter.js`
   - `api/search.js`
   - `api/outreach.js`
   - `vercel.json`
3. Click **"Commit changes"**

### Step 3: Deploy on Vercel
1. Go to **vercel.com** → Sign up free (use GitHub login)
2. Click **"Add New Project"**
3. Click **"Import"** next to your `leadhunter-pro` repo
4. Leave all settings as default
5. Click **"Deploy"**
6. ✅ Done! Your app is live at: `https://leadhunter-pro.vercel.app`

### Step 4: Add API Keys in the App
1. Open your live app URL
2. Go to **Settings** (left sidebar)
3. Paste your free API keys
4. Click **Save API Keys**

---

## 🔑 Getting Free API Keys

### Apollo.io (50 free leads/month)
1. Go to → https://app.apollo.io
2. Sign up free
3. Go to Settings → Integrations → API
4. Copy your API key

### Hunter.io (25 free email searches/month)
1. Go to → https://hunter.io
2. Sign up free
3. Go to Dashboard → API
4. Copy your API key

### Google Custom Search (100 free searches/day)
1. Go to → https://console.cloud.google.com
2. Create a new project
3. Enable "Custom Search API"
4. Go to Credentials → Create API Key
5. Also go to → https://programmablesearchengine.google.com
6. Create a search engine → Copy the CX ID

---

## 💡 How to Use

### Finding Leads
1. Go to **Find Leads** page
2. Select countries: USA, UK, Australia, Canada
3. Select platforms: Shopify, WordPress, WooCommerce
4. Select company size and industry
5. Click **⚡ Find Leads Now**
6. Only leads scoring **70+** are shown (hot leads)

### Saving & Tracking Leads
1. Click **+ CRM** on any lead to save it
2. Go to **My CRM** to see all saved leads
3. Update status: New → Contacted → Replied → Won
4. Filter by status to focus your outreach

### Generating Outreach
1. Save a lead to CRM first
2. Go to **Outreach Hub**
3. Select the lead from left panel
4. Choose tone: Professional / Friendly / Direct / Value-first
5. Select type: Cold Email / LinkedIn DM / Follow-ups / WhatsApp
6. Click **✨ Generate with AI**
7. Copy and send!

### Exporting Leads
- Click **⬇ Export CSV** in top bar anytime
- Opens a CSV file with all lead details
- Import to Google Sheets, Excel, or any CRM

---

## ⚠️ Without API Keys

The tool works perfectly without API keys using **sample data mode**:
- Generates realistic sample leads based on your filters
- Full scoring, CRM, and outreach features work
- Use it to practice and build your outreach process
- Add real API keys later for live lead data

---

## 🔒 Security

- API keys stored in browser localStorage only
- Keys never exposed in frontend code
- All API calls routed through Vercel serverless functions
- No database — all data stays in your browser

---

## 📞 Support

Built with ❤️ for Shopify & WordPress freelancers.
For issues, check Vercel deployment logs in your Vercel dashboard.
