import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    //By default, Mongoose adds an _id property to your schemas.
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: { type: String, required: true, unique: true, trim: true },
    fullname: { type: String, require: true, trim: true, index: true },
    avatar: {
      type: String, //cloudinary/aws URL
      required: true,
    },
    coverImage: {
      type: String, //cloudinary/aws URL
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Video', //name of schema/model at the time of model creation(last line in export)
      },
    ],
    password: {
      type: String, //an encription string
      required: [true, 'Password is required'], // we can also pass error message
    },
    refreshToken: String, //short hand for defining type: {type:String}
  },
  { timestamps: true }
  //Mongoose will add two properties of type Date to your schema:
  //createdAt: a date representing when this document was created
  //updatedAt: a date representing when this document was last updated
  //Mongoose will then set createdAt when the document is first inserted, and update updatedAt whenever you update the document using save(), updateOne(), updateMany(), findOneAndUpdate(), update(), replaceOne(), or bulkWrite().
);

export const User = new mongoose.Model('User', userSchema);
