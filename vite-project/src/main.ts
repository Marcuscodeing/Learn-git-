import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';

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

class Task {
constructor(public task: string,
            public id: number = Date.now(),
            public done: boolean = false) {} 
}

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