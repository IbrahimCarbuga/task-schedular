import * as express from 'express';
import { TaskModel } from './task';

const taskRoutes = express.Router();

taskRoutes.get('/task', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    try {
        let items: any = await TaskModel.find({});
        items = items.map((item) => { return { id: item._id, description: item.description } });
        resp.json(items);
    } catch (err) {
        resp.status(500);
        resp.end();
        console.error('Caught Error', err);
    }
});

taskRoutes.post('/task', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const description = req.body['description'];
    const item = new TaskModel({description: description});
    await item.save();
    resp.end();
});

taskRoutes.put('/task/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const description = req.body['description'];
    const id = req.params['id'];
    await TaskModel.findOneAndUpdate({id: id}, {description: description});
    resp.end();
});

taskRoutes.delete('/task/:id', async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    const id = req.params['id'];
    await TaskModel.findByIdAndDelete(id);
    resp.end();
});

export { taskRoutes }