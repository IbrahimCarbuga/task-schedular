import * as mongoose from 'mongoose';

interface ITask {
    _id: string;
    description: string;

}

const TaskSchema = new mongoose.Schema({
    description: String
});

const TaskModel = mongoose.model('Task', TaskSchema);

export { TaskModel, ITask }