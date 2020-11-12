function TodoList ({ $app, state = [] }) {
  const $todoList = document.createElement('ul');
  $app.appendChild($todoList);
  this.state = state;
  
  this.render = () => {
    $todoList.innerHTML = this.state
      .map(({ text, isCompleted }) => (
        isCompleted
        ? `<li class="completed">${text}<button>삭제</button></li>` 
        : `<li>${text}<button>삭제</button></li>`
      ))
      .join('')
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }
}

export default TodoList;
