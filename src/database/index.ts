import mongoose, { mongo } from 'mongoose';

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export { mongoose };