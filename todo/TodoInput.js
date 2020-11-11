function TodoInput ({ $app, onAddTodo }) {
  this.$app = $app;
  this.onAddTodo = onAddTodo;
  this.$todoInput = document.createElement('input');

  this.addEventTodoInput = () => {
    this.$todoInput.addEventListener('keydown', (event) => {
      const { target: { value } } = event;
      if (value.length > 0 && event.key === 'Enter') {
        this.onAddTodo(value);
        this.$todoInput.value = '';
        this.$todoInput.focus();
      }
    })  
  }

  this.addEventTodoInput();

  this.$app.appendChild(this.$todoInput);
  this.$todoInput.focus();
}

export default TodoInput;
