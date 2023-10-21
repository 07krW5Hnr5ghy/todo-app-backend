import TaskModel from "../models/task";
import { Task } from "../interfaces/task.interface";
const insertTask = async (task: Task) => {
    const responseInsert = await TaskModel.create(task);
    return responseInsert;
}

const listTasks = async () => {
    const responseTasks = await TaskModel.find({});
    return responseTasks;
}

const findTask = async (id: string) => {
    const responseTask = await TaskModel.findOne({ _id: id });
    return responseTask;
}

const editTask = async (id: string, data: Task) => {
    const responseTask = await TaskModel.findOneAndUpdate(
        { _id: id },
        data,
        { new: true }
    );
    return responseTask;
}

const removeTask = async (id: string) => {
    const responseTask = await TaskModel.findOneAndDelete({ _id: id });
    return responseTask;
}

export { insertTask, listTasks, findTask, editTask, removeTask };