function TodoInput ({ $app, onAddTodo }) {
  const $todoInput = document.createElement('input');
  $app.appendChild($todoInput);
  
  $todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      onAddTodo(event.target.value)
      $todoInput.value = '';
      $todoInput.focus();
    }
  });
  $todoInput.focus();  
}

export default TodoInput;
