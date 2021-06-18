FROM node:alpine

WORKDIR /Bracked_Break_Project/school_app/absent_service/
RUN npm install
RUN npm install -g sequelize-cli
COPY ./src/package*.json ./src/package-lock*.json ./

EXPOSE 8081

CMD ["npm", "start"]