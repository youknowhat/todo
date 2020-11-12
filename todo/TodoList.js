function TodoList ({ $app, state }) {
  this.state = state;
  this.$app = $app;
  this.$todoList = document.createElement('ul');

  this.$app.appendChild(this.$todoList);

  this.deleteTodo = (event) => {
    event.target.parentNode.remove();
  }

  this.checkTodo = (event) => {
    const { target } = event;
    target.className = target.className.indexOf('completed') >= 0 ? '' : 'completed';
  }

  this.render = () => {
    this.$todoList.innerHTML =
      this.state.reduce(
        (htmlString, { text, isCompleted }, index) =>
          htmlString +
          `<li data-index=${index}><span data-action="toggleComplete" class=${
            isCompleted ? 'complete' : ''
          }>${text}</span><button data-action="delete">삭제</button></li>`,
        ''
      )
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
}

export default TodoList;
