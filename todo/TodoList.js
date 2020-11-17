function TodoList ({ $app, state = [] }) {
  const $todoList = document.createElement('ul');
  $app.appendChild($todoList);
  this.state = state;
  
  this.onAddEvent = () => {
    $todoList.addEventListener('click', (event) => {
      const { target } = event;
      if(target.nodeName === 'BUTTON') { 
        this.onDelete(target);
      }
      if(target.nodeName === 'SPAN') {
        this.onToggle(target);
      }
    })
  }

  this.onDelete = ($target) => {
    const index = parseInt($target.parentNode.dataset.id);
    this.setState([
      ...this.state.slice(0, index),
      ...this.state.slice(index + 1),
    ])
  }

  this.onToggle = ($target) => {
    const index = parseInt($target.parentNode.dataset.id);
    const { text, isCompleted } = this.state[index];
    this.setState([
      ...this.state.slice(0, index),
      {
        text: text,
        isCompleted: !isCompleted
      },
      ...this.state.slice(index + 1),
    ])
  }

  this.render = () => {
    $todoList.innerHTML = this.state
      .map(({ text, isCompleted }, index) => (
        isCompleted
        ? `<li data-id=${index} data-completed="true"><span>${text}</span><button>삭제</button></li>` 
        : `<li data-id=${index} data-completed="false"><span>${text}</span><button>삭제</button></li>`
      ))
      .join('')
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.onAddEvent();
}

export default TodoList;
