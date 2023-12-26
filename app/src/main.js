import './style.css'
import initialTodos from'./todos.json';
import { v4 as uuidv4 } from 'uuid';
import './helper.js'

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

initialTodos.forEach((todo) => {
  document.querySelector('#app').innerHTML += `<li>${todo.title}</li>`;
});

document.querySelector("form#new-todo-form").addEventListener('submit', handleNewTodo);