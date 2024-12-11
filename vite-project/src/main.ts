import './style.css';
import { e as elements } from './helpers/elementCreationHelpers';

document.getElementById("app")?.append(
  elements.heading.primary(`Test`, 'primary'), 
  elements.heading.secondary(`Testing that the element helpers are working`),
  elements.input(),
  elements.button('Button')
);


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

let list: Entodo [] = [study, workout, clean, meditate, food];