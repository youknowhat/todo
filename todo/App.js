import TodoInput from './TodoInput.js';
import TodoList from './TodoList.js';

function App ({ $app }) {
  this.$app = $app;
  this.state = [];

  this.components = [
    new TodoInput({
      $app: this.$app,
      onAddTodo: (text) => {
        const nextState = [
          ...this.state,
          {
            text,
            isCompleted: false
          }
        ];
        this.setState(nextState);
    }}),
    new TodoList({
      $app,
      state: this.state
    })
  ]

  this.setState = (nextState) => {
    this.state = nextState;
    this.components.forEach(({ setState }) => setState && setState(this.state));
  }
}

export default App;
