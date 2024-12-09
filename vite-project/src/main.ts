import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';
import { ITask } from './models/task/ITask';
import { Task } from './models/task/Task';

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, 'primary'), 
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.input(),
  elements.button('Button')
);