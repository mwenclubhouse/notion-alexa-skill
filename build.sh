rm -rf build
mkdir build
cp app/package*.json build
cd build
npm ci --only=production
npm install
cp -r ../app/src ../app/tsconfig.json .
npm run build
rm -rf src tsconfig.json
zip -r ../app/app.zip .
