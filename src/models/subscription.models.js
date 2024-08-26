import mongoose, { Schema } from 'mongoose';
const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: 'User', // one who IS SUBSCRIBING
      required: true,
    },
    channel: {
      type: Schema.Types.ObjectId,
      ref: 'User', //one to whom 'subscriber' is subscribing, also a user
      required: true,
    },
  },
  { timestamps: true }
);
export const Subscription = new mongoose.Model(
  'Subscription',
  subscriptionSchema
);
