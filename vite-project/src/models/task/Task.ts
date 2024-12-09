import { ITask } from "./ITask";

export class Task implements ITask {
    constructor(public name: string, public id: number = Date.now(), public done: boolean = false) {}
}