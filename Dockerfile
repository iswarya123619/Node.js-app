FROM node:20-alpine

LABEL maintainer="Iswarya"
LABEL description="Dynamic Node.js web application"

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

ENV PORT=3000

EXPOSE 3000

USER node

CMD ["npm", "start"]
