export class Task {
    constructor(public name: string, public id: number = Date.now(), public done: boolean = false) {} 
}