FROM node:18

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm run build

# If you are building your code for production
# RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD [ "node", "build/app.js" ]