//1. // console.log("Hello World : All ok");

// 2. // import { app } from './app.js';

// const port = 5000;
// app.listen(5000, () => {
//   console.log(`Server is active at port : http://localhost:${port}`);
// });

//3.
import { app } from './app.js';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import dbConnect from './db/index.js';

import dotenv from 'dotenv';
//Dotenv configuration
//dotenv.config();
const resultDotenv = dotenv.config({
  path: './.env',
});
if (resultDotenv.error) {
  throw error;
}
console.log(`Successfully fetched values from .env :`, resultDotenv.parsed);

const PORT = process.env.PORT || 5001;
console.log(`Current PORT: ${PORT}`);
// app.listen(PORT, () => {
//   console.log(`Server is active at http://localhost:${PORT}`);
// });

//2 approaches to DB connection
//M1: non-modular approach, all code in index.js, using IIFE
// (async () => {
//   try {
//     console.log(`Connecting to database`);
//     await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);

//     //once DB is coonected, start listening(but handle any error event)
//     app.on('error', () => {
//       console.log(`Application unable to talk to database`);
//       throw error;
//     });
//     app.listen(PORT, () => {
//       console.log(`Server is active at http://localhost:${PORT}`);
//     });
//   } catch (error) {
//     console.log(`You got error connecting to Database : ${error}`);
//     throw error;
//   }
// })();

//M2: modular approach, db connection code in 'db' folder and the import it and use it in index.js

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
  })
}).catch(err=>{
  console.log(`Mongo db connection error:${err}`);
});
