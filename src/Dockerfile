FROM node:alpine

WORKDIR /Bracked_Break_Project/school_app/absent_service/
COPY package*.json ./
RUN npm install
RUN npm install -g sequelize-cli
COPY ./ ./

EXPOSE 8081

CMD ["npm", "start"]