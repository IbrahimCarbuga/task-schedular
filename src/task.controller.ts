import { TaskModel, ITask } from './task';
import { BodyProp, Controller, Delete, Get, Post, Put, Route } from 'tsoa';

@Route('/task')
export class TaskController extends Controller {
    @Get()
    public async getAll(): Promise<ITask[]> {
        try {
            let items: any = await TaskModel.find({});
            items = items.map((item) => { return { id: item._id, description: item.description } });
            return items;
        } catch (err) {
            this.setStatus(500);
            console.error('Caught Error', err);
        }
    }

    @Post()
    public async create(@BodyProp() description: string): Promise<void> {
        const item = new TaskModel({ description: description });
        await item.save();
    }

    @Put('/{id}')
    public async update(id: string, @BodyProp() description: string): Promise<void> {
        await TaskModel.findOneAndUpdate({ _id: id }, { description: description });
    }

    @Delete('/{id}')
    public async remove(id: string): Promise<void> {
        await TaskModel.findByIdAndDelete(id);
    }
}