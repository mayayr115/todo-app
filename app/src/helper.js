import './style.css'
import initialTodos from './todos.json';

initialTodos.forEach((todo) => {
  document.querySelector('#app').innerHTML += `<li>${todo.title}</li>`;
});