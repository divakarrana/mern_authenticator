# Getting started with MERN Authenticator

## Intro

MERN Authenticator is a web application that allows an external user to submit their information.
It allows Admins to access the data of all the users, present in the MongoDB database.

## How to RUN this application

Follow below mentioned steps to RUN this application on local environment

1. Clone this repository to you local disk space.
2. Navigate inside the client folder and run `npm install`
3. Navigate inside the server folder and run `npm install`
4. Create a `config.env` file in /server and define these

   a. NODE_ENV=your_custom_environment

   b. PORT=your_custom_port

   c. DATABASE=your_database_url

   d. DATABASE_USERNAME=your_database_username

   e. DATABASE_PASSWORD=your_database_password

   f. JWT_SECRET=your_custom_secret

   g. JWT_EXPIRES_IN=your_custom_expiration

   h. JWT_COOKIE_EXPIRES_IN=your_custom_expiration

5. After setting up these, go ahead and run `npm start` in two different terminals. One for client and one for server.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
