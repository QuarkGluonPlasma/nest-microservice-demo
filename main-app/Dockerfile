FROM node:alpine as development

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine as production

WORKDIR /usr/app

COPY package.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/app/dist ./dist

CMD ["node", "dist/main.js"]