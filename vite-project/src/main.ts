import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';
import { Task } from './models/Task';

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, 'primary'), 
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.input('text', 'Placeholder'),
  elements.input('email', 'ymer.nordstrom@medieinstitutet.se', true),
  elements.input('checkbox', true, true),
  elements.button('Button')
);

const lSName = 'tasks', lS = localStorage.getItem(lSName),
  tasks: Task[] = lS ? JSON.parse(lS).map((t: Task) => t as Task) : [new Task('hello world')];

console.log(tasks);

localStorage.setItem(lSName, JSON.stringify(tasks));