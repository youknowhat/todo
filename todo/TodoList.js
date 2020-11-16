function TodoList ({ $app, state = [] }) {
  const $todoList = document.createElement('ul');
  $app.appendChild($todoList);
  this.state = state;
  
  this.delete = () => {
    $todoList.addEventListener('click', (event) => {
      const button = event.target;
    })
  }

  this.render = () => {
    $todoList.innerHTML = this.state
      .map(({ text, isCompleted }, index) => (
        isCompleted
        ? `<li class="completed">${text}<button data-index-${index}>삭제</button></li>` 
        : `<li>${text}<button data-index-${index}>삭제</button></li>`
      ))
      .join('')
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }
}

export default TodoList;
