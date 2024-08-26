import mongoose, { Schema } from 'mongoose';
const likeSchema = new Schema(
  {
    // either of 'comment','video','tweet' will be assigned a 'like', others are null
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: 'Video',
    },
    tweet: {
      type: Schema.Types.ObjectId,
      ref: 'Tweet',
    },
    // woh is liking the 'video', 'comment', or 'tweet'
    likedby: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
const Like = new mongoose.Model('Like', likeSchema);
