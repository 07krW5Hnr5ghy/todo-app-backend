import { Schema, Types, model, Model } from "mongoose";
import { Task } from "../interfaces/task.interface";

const TaskSchema = new Schema<Task>(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const TaskModel = model('tasks', TaskSchema);
export default TaskModel;