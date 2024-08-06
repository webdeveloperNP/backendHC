import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';

const dbConnect = async () => {
  try {
    console.log(`Connecting to database`);
    const connectionInstance = await mongoose.connect(
      `${process.env.DATABASE_URI}/${DB_NAME}`
    );
    console.log(`Connected to dattabase`);
    console.log(`See what conn intance hold: ${connectionInstance}`);
    console.log(`See what conn intance hold: ${connectionInstance.connection}`);
    console.log(`DB host: ${connectionInstance.connection.host}`); // connection instance holds a connection object
  } catch (error) {
    console.log(`You got error connecting to Database : ${error}`);
    throw error;
  }
};

export default dbConnect;
