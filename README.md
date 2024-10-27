# Quiz App

## Description 
This is a Quiz App where you can upload and play quizzes.

## Authors

- [@FelixWrba](https://www.github.com/FelixWrba)

## Features

* Search
* Most played section
* Login / Sign up
* Create / Play quizzes

## License

The content and works on these pages created by Felix Wrba are subject to copyright law. Duplication, processing, distribution and any type of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this page are only permitted for private, non-commercial use.

## Requirements

* Git
* NodeJS
* XAMPP / phpmyadmin

## How to run

### 1. Clone Repository: 
```bash
git clone https://github.com/FelixWrba/Quiz-App.git
cd Quiz-App
```
### 2. Install Dependencies
* body-parser
* dotenv
* ejs
* express
* mysql2
* sequelize
```bash
npm install <depency>
```
### 3. Configure .env
1. Create a .env file
2. Fill it out:
```
    PORT=<port>
    DB_HOST=<host>
    DB_USER=<user>
    DB_PASS=<password>
```
### 3. Setup Database
1. Start Apache & MySQL via XAMPP Control Panel
2. Open [phpmyadmin](http:localhost/phpmyadmin)
3. Create database "quiz app"
4. Create Table users with columns: `id`, `name`, `email`, `password`, `createdAt`, `updatedAt`
### 4. View in browser
1. Start server:
```bash
npm run devStart
```
2. Open [localhost](http://localhost:3000)

## Tech Stack

**Client:** HTML, CSS, JS

**Server:** Node, Express

**Database:** MySQL, sequelise