import { mongoose } from '../database';

const taskSchema = new mongoose.Schema({
  username: String,
  activity: [String]
});

const Task = mongoose.model('Task', taskSchema);

export { Task };