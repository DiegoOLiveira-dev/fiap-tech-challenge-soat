FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

# RUN echo "nameserver 8.8.8.8" >> /etc/resolv.conf

# RUN echo "nameserver 8.8.4.4" >> /etc/resolv.conf

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
