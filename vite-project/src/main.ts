import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';
import { Task } from './models/Task';

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, 'primary'), 
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.input(),
  elements.button('Button')
);

const t = [new Task('hello world')];

const l = localStorage.getItem('task');

let lT: Task[] = [];

if (l) {
  lT = JSON.parse(l)?.map((t: Task) => t as Task)
}

console.log(t, lT);