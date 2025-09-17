#!/bin/bash
# Build CSS
npm run build

# Stage all changes
git add .

# Commit with a message including current date/time
git commit -m "Auto-update $(date +"%Y-%m-%d %H:%M:%S")"

# Push to GitHub
git push

echo "✅ Build + commit + push complete!"