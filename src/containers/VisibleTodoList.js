import { connect } from 'react-redux';
import { visibilityFilters, toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  console.log('todos', todos);
  console.log('filter', filter);
  switch(filter) {
    case visibilityFilters.SHOW_ALL:
      return todos;
    case visibilityFilters.SHOW_COMPLETED:
      console.log(todos.filter(task => task.completed))
      return todos.filter(task => task.completed);

    case visibilityFilters.SHOW_ACTIVE:
      console.log(todos.filter(task => !task.completed))
      return todos.filter(task => !task.completed);

    default:
      throw new Error('Unknown filter: ' + filter);
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos.list, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

const VisibleTodoList = () => {
  return (
    <TodoList />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);