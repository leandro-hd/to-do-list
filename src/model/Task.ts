import { mongoose } from '../database';
import MUUID from 'uuid-mongodb';

const taskSchema = new mongoose.Schema({
  _id: {
    type: 'object',
    value: { type: 'Buffer' },
    default: () => MUUID.v4().toString()
  },
  username: {
    type: String,
    unique: true
  },
  activity: {
    type: [String]
  }
});

const Task = mongoose.model('Task', taskSchema);

export { Task };