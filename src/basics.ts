// Primitives: numbers, strings, boolean
// More complex types: arrays, objects
// Functions types, parameters

// Primitives
let age: number;
age = 5;

let userName: string;
userName = 'Angular';

let isInstructor: boolean = false;

// More complex tpyes

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

let person: any; //anything is allowed
person = {
  name: 'Angular',
  age: 32
};

let people: {
  name: string;  //if you specify your type of variables you can't do an error
  age: number;
};

people = {
  name: 'Angular',
  age: 32
}

// Type inference
let course = 'React - The Complete Guide';
//course = 12345; will give an error because we can't give a number in a string

let union: string | number = 2;

union = 'Maria';


// Functions & types

function add(a: number, b: number){
  return a + b;
}

function print(value: any) {
  console.log(value);
}

//Generics

function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //Outpu [-1, 1, 2, 3]
