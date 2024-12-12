import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';
import { Task } from './models/Task';

document.getElementById("app")?.append(elements.heading.primary(`Test`, 'primary'), elements.heading.secondary(`Testing that the element helpers are working`));
const submitButton = elements.button('btn-primary', 'submit-btn');
submitButton.innerText = 'Skicka';
document.getElementById("app")?.appendChild(submitButton);

const inputField = elements.input('text', 'input-field', 'todo');
inputField.placeholder = 'Add a Todo';
document.getElementById("app")?.appendChild(inputField)
;

const list = document.createElement("ul");
list.id = "list"
list.style.listStyle = "none";
document.getElementById("app")?.appendChild(list);

const myTodos: Task[] = [];


const createChore = () => {
    const NewTask = new Task(inputField.value);
    myTodos.push(NewTask);
    inputField.value = "";

    let myStringArray = JSON.stringify(myTodos);
    localStorage.setItem("storageKey", myStringArray);
    todoListLoop();
};


const localStorageArray = () => {
    const localArray = localStorage.getItem("storageKey");
    if (localArray){
    const parseArray: Task[] = JSON.parse(localArray);
    myTodos.push(...parseArray);
    }
};
localStorageArray();

const todoListLoop = () =>{
    const list = document.getElementById("list");
    if (list) {
        list.innerHTML = "";
    }

    for (let i = 0; i < myTodos.length; i++){
        
        const listItems = document.createElement("li");
        listItems.className = "listItems";
        listItems.innerHTML = myTodos[i].task + "   ";
        list?.appendChild(listItems);
        
        
      
        
        const finishedButton = elements.button('btn-primary', 'submit-btn');
        finishedButton.innerText = 'Ta bort';
        listItems.appendChild(finishedButton);
        
        finishedButton.addEventListener("click", () => {
            myTodos.splice(i,1);
            
        });
        }
    };
    todoListLoop();

submitButton.addEventListener("click", () => {
        createChore();
    });
const DEFAULT_HEADING_CLASSES = elements.settings.defaultHeadingClass.set('heading');

console.log(
    {DEFAULT_HEADING_CLASSES: DEFAULT_HEADING_CLASSES},
    {elements_settings_defaultHeadingClass_get: elements.settings.defaultHeadingClass.get()}
);

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, 'primary'), 
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.input('text', 'Placeholder'),
  elements.input('email', 'some.email@mail.com', true),
  elements.input('checkbox', true, true),
  elements.input('checkbox'),
  elements.button('Button')
);

const lSName = 'tasks', lS = localStorage.getItem(lSName),
  tasks: Task[] = lS ? JSON.parse(lS).map((t: Task) => t as Task) : [new Task('hello world')];

console.log(tasks);

localStorage.setItem(lSName, JSON.stringify(tasks));
