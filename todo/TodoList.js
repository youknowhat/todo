function TodoList ({ $app, state }) {
  this.state = state;
  this.$app = $app;
  this.$todoList = document.createElement('ul');

  this.$app.appendChild(this.$todoList);

  this.render = () => {
    this.state.forEach(({ text, isCompleted }) => {
      const $todoItem = document.createElement('li');
      const $deleteButton = document.createElement('button');

      $todoItem.textContent = text;
      $todoItem.className = isCompleted && 'completed';

      $deleteButton.textContent = '삭제';
      $deleteButton.className = 'delete';

      this.$todoList.appendChild($todoItem);
      $todoItem.appendChild($deleteButton);
    })
  }

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
}

export default TodoList;
