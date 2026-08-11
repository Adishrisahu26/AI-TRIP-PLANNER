FROM node:22-alpine

WORKDIR /app

COPY server/package*.json ./server/
COPY client/package*.json ./client/

RUN npm install --prefix server
RUN npm install --prefix client

COPY server ./server
COPY client ./client

RUN npm run build --prefix client

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["npm", "start", "--prefix", "server"]
