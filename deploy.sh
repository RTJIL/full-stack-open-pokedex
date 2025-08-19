#!/bin/bash
set -e  # stop on error

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building project..."
npm run build

# If you’ve got DB migrations (Prisma/Sequelize/etc):
# echo "🗄️ Running migrations..."
# npx prisma migrate deploy !!!make it executable or use bash

echo "✅ Deployment finished!"
