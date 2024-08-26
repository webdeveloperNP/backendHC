import mongoose, { Schema } from 'mongoose';
const videoSchema = new Schema(
  {
    videofile: {
      type: String, //cloudinary url
      required: true,
    },
    thumbnail: {
      type: String, //cloudinary url
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    views: { type: Number, default: 0 },
    duration: Number,
    ispublished: Boolean,
  },
  { timestamps: true }
);

export const Video = new mongoose.Model('Video', videoSchema);
