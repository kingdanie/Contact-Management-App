contact-list-app

A simple contacts management application that was modeled after adma mcquistan StackAbuse blog article. The technologies used include Sequelize.js,  Sequelize-cli, Express, Nodemon, Body-parser, Vue.js and SQLite. 

Usage

1.    Clone repo

original repo
git clone https://github.com/amcquistan/sequelize-sqlite-express-vue.git

2.    install dependencies (Built with Node.js version 12.14.0)

cd contact-list-app/ or sequelize-sqlite-express-vue if you cloned the original repo

npm install

3.    run migrations and seeders

node_modules/.bin/sequelize db:migrate
node_modules/.bin/sequelize db:seed:all

4.    To start express server

"npm start" 

"npm run dev" if you want the server to run independently and monitor changes autonomously using nodemon.


Update

If you cloned the original repo, you will need to change the sequelize findById() method to findByPk.