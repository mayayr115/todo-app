import './style.css'
import './helper.js'
import { v4 as uuidv4 } from 'uuid';

const handleNewTodo = (e) => {
  e.preventDefault();

  const form = e.target;
  const newTodo = {
    uuid: uuidv4(),
    title: form.todoTitle.value,
    isComplete: false
  }
  
  console.log(newTodo);

  form.reset();
};

const main = () => {
  document.querySelector("form#new-todo-form").addEventListener('submit', handleNewTodo);
};

main();