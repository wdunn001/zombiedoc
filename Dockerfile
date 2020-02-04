FROM node:stretch
WORKDIR /app
ENV PATH /node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli
COPY . /app
CMD ng serve --host 0.0.0.0
EXPOSE 4200
