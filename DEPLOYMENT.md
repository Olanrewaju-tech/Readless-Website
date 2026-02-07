# Deployment Guide for Your Server

## Quick Start (Fastest Method)

1. **Upload the entire `readless-landing` folder to your server**

2. **SSH into your server:**
```bash
ssh your-username@your-server-ip
```

3. **Navigate to the project:**
```bash
cd /path/to/readless-landing
```

4. **Install dependencies:**
```bash
npm install
```

5. **Build the project:**
```bash
npm run build
```

6. **Start the server:**
```bash
npm start
```

Your site will be running on `http://your-server-ip:3000`

---

## Production Setup (With PM2)

### Step 1: Install PM2
```bash
npm install -g pm2
```

### Step 2: Start the Application
```bash
cd /path/to/readless-landing
pm2 start npm --name "readless-landing" -- start
```

### Step 3: Save PM2 Configuration
```bash
pm2 save
pm2 startup
```

### Step 4: Useful PM2 Commands
```bash
# View logs
pm2 logs readless-landing

# Restart app
pm2 restart readless-landing

# Stop app
pm2 stop readless-landing

# Monitor
pm2 monit

# List all apps
pm2 list
```

---

## Setting Up Domain (getreadless.tech)

### Option 1: Using Nginx (Recommended)

1. **Install Nginx (if not installed):**
```bash
sudo apt update
sudo apt install nginx
```

2. **Create Nginx configuration:**
```bash
sudo nano /etc/nginx/sites-available/readless
```

3. **Add this configuration:**
```nginx
server {
    listen 80;
    server_name getreadless.tech www.getreadless.tech;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

4. **Enable the site:**
```bash
sudo ln -s /etc/nginx/sites-available/readless /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

5. **Update DNS:**
- Go to your domain registrar (where you bought getreadless.tech)
- Add an A record pointing to your server's IP address
- Wait 5-10 minutes for DNS propagation

---

### Option 2: Direct Port 80 (No Nginx)

If you want to run directly on port 80:

```bash
# Start on port 80 (requires sudo)
sudo PORT=80 npm start

# Or with PM2:
sudo pm2 start npm --name "readless" -- start -- --port 80
```

---

## Adding SSL/HTTPS (Let's Encrypt)

1. **Install Certbot:**
```bash
sudo apt install certbot python3-certbot-nginx
```

2. **Get SSL Certificate:**
```bash
sudo certbot --nginx -d getreadless.tech -d www.getreadless.tech
```

3. **Follow the prompts:**
- Enter your email
- Agree to terms
- Choose to redirect HTTP to HTTPS (recommended)

4. **Auto-renewal is set up automatically!**

Test renewal:
```bash
sudo certbot renew --dry-run
```

Your site will now be available at: `https://getreadless.tech`

---

## Updating the Site

When you make changes:

```bash
# 1. Upload new files to server

# 2. SSH into server
ssh your-username@your-server-ip

# 3. Navigate to project
cd /path/to/readless-landing

# 4. Rebuild
npm run build

# 5. Restart with PM2
pm2 restart readless-landing

# Or restart without PM2
# (Stop with Ctrl+C and run npm start again)
```

---

## Troubleshooting

### Port 3000 already in use:
```bash
# Find and kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
PORT=8080 npm start
```

### Permission denied on port 80:
```bash
# Use sudo
sudo PORT=80 npm start

# Or configure Nginx as reverse proxy (recommended)
```

### Site not loading:
```bash
# Check if app is running
pm2 list

# Check logs
pm2 logs readless-landing

# Check Nginx status
sudo systemctl status nginx

# Check Nginx error logs
sudo tail -f /var/log/nginx/error.log
```

### DNS not resolving:
- Wait 10-30 minutes for DNS propagation
- Check DNS settings at your registrar
- Use `nslookup getreadless.tech` to verify

---

## Firewall Configuration

If using UFW firewall:

```bash
# Allow HTTP
sudo ufw allow 80/tcp

# Allow HTTPS
sudo ufw allow 443/tcp

# Allow SSH (if not already allowed)
sudo ufw allow 22/tcp

# Enable firewall
sudo ufw enable

# Check status
sudo ufw status
```

---

## Environment Variables (Optional)

Create `.env.local` for custom settings:

```bash
# .env.local
PORT=3000
NODE_ENV=production
```

---

## Monitoring

### Check if site is running:
```bash
curl http://localhost:3000
```

### Check from outside:
```bash
curl http://getreadless.tech
```

### Monitor with PM2:
```bash
pm2 monit
```

---

## Backup

Backup your project regularly:

```bash
# Create backup
tar -czf readless-backup-$(date +%Y%m%d).tar.gz readless-landing/

# Restore from backup
tar -xzf readless-backup-20260206.tar.gz
```

---

## Need Help?

Contact: info@getreadless.tech
