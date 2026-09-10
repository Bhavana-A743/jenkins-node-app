FROM node
WORKDIR /index
COPY pakage.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm" , "index.js"]