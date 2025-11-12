import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

export const TaskController = {
    async getAll(req: Request, res: Response) {
        const tasks = await TaskService.getAll();
        res.json(tasks);
    },

    async create(req: Request, res: Response) {
        const task = await TaskService.create(req.body);
        res.status(201).json(task);
    },

    async update(req: Request, res: Response) {
        const task = await TaskService.update(Number(req.params.id), req.body);
        res.json(task);
    },

    async delete(req: Request, res: Response) {
        await TaskService.delete(Number(req.body.id));
        res.status(204).send();
    }, 

    async duplicate(req: Request, res: Response){
        const duplicated = await TaskService.duplicate(Number(req.params.id));
        res.status(201).json(duplicated);
    }
}