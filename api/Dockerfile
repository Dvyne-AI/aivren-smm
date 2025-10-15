# API
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install || yarn
COPY . .
EXPOSE 4000
CMD ["npm","start"]
