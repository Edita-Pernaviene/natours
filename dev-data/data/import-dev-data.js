/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable no-console */
/* eslint-disable prettier/prettier */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('../../models/tourModel');
const Review = require('../../models/reviewModel');
const User = require('../../models/userModel');

dotenv.config({path: './config.env'});

//const app = require('./app');

//console.log(process.env);
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
// this is how to connect to local base
// .connect(process.env.DATABASE_LOCAL,{ )
.connect(DB, {
     useNewUrlParser: true,
     useCreateIndex: true,
     useFindAndModify: false
})
.then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
const reviews = JSON.parse(fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8'));

//IMPORT DATA INTO DB
const importData = async () => {
     try {
          await Tour.create(tours,{ validateBeforeSave: false } );
          await User.create(users,{ validateBeforeSave: false });
          await Review.create(reviews);
          console.log('Data succesfully loaded!');
          
     } catch (err) {
          console.log(err);
     }
     process.exit();
};

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
     try {
          await Tour.deleteMany();
          await User.deleteMany();
          await Review.deleteMany();
          console.log('Data succesfully deleted!');
          
     } catch (err) {
          console.log(err);
     }
     process.exit();
};

if(process.argv[2] === '--import') {
     importData();
} else if (process.argv[2] === '--delete') {
     deleteData();
}

