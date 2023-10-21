import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handler"
import { insertTask, listTasks, findTask, editTask, removeTask } from "../services/task";

const getTask = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseTask = await findTask(id);
        res.send(responseTask);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM', error);
    }
}
const getTasks = async (req: Request, res: Response) => {
    try {
        const responseTasks = await listTasks();
        res.send(responseTasks);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}
const updateTask = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const reponseTask = await editTask(id, body);
        res.send(reponseTask);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', error);
    }
}
const postTask = async ({ body }: Request, res: Response) => {
    try {
        const responseTask = await insertTask(body);
        res.send(responseTask);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}
const deleteTask = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const responseTask = await removeTask(id);
        res.send(params);
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM', error);
    }
}

export { getTask, getTasks, updateTask, postTask, deleteTask };