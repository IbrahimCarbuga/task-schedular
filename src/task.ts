import * as mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    description: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

export { TaskModel }