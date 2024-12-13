import './style.css';
import { Task } from './models/Task'; //Please use this class instead of creating a new inside main. You can check usage inside /src/tests.ts
import { t as tests } from './tests';

tests();

class Entodo {
  name: string;
  isComplete: boolean;

constructor (name: string, isComplete: boolean = false){
this.name = name;
this.isComplete = isComplete;

}}

const study = new Entodo ("Studera")
const workout = new Entodo ("Träna")
const clean = new Entodo ("Städa")
const meditate = new Entodo ("Meditera")
const food = new Entodo ("Handla mat")

let list = [study, workout, clean, meditate, food];
