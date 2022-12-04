FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["./4_QueueSubscriber/*" , "./"]
COPY ["./3_QueueSystem/queueInformations.js" , "./"] 
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8081
RUN chown -R node /usr/src/app
USER node
CMD ["node", "./index.js"]
