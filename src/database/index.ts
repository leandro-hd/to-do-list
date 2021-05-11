import mongoose from 'mongoose';

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:27017/admin`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

export { mongoose };