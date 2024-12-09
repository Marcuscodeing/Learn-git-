export class Task {
    id: number;
    done: boolean;

    constructor(name: string, id?: number, done?: boolean) {
        this.id = id || Date.now();
        this.done = done || false;
    } 
}