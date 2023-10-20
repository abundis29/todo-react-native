import todoReducer, { addTodo, updateTodo, deleteTodo, initialState } from '../todoSlice';

describe('todoSlice reducers', () => {
  let state;

  beforeEach(() => {
    state = initialState;
  });

  it('should add a new todo', () => {
    const text = 'New Todo Text';
    const currentTime = new Date().toISOString();
    const action = addTodo({ id: '1', text, isCompleted: false, createdAt: currentTime, updatedAt: currentTime });
    const newState = todoReducer(state, action);

    expect(newState.todos).toEqual([{ id: '1', text, isCompleted: false, createdAt: currentTime, updatedAt: currentTime }]);
  });

  it('should update an existing todo', () => {
    // Create an initial state with a todo to update
    state = {
      todos: [{ id: '1', text: 'Existing Todo', isCompleted: false, createdAt: 'oldTime', updatedAt: 'oldTime' }],
    };

    const currentTime = new Date().toISOString();
    // Define the action to update the todo with id '1'
    const action = updateTodo({ id: '1', text: 'Updated Todo', isCompleted: true, createdAt: currentTime, updatedAt: currentTime });
    const newState = todoReducer(state, action);

    // Verify that the todo with id '1' has been updated
    expect(newState.todos).toEqual([
      { id: '1', text: 'Updated Todo', isCompleted: true, createdAt: currentTime, updatedAt: currentTime },
    ]);
  });

  it('should not update a non-existing todo', () => {
    // Create an initial state without the todo to update
    state = {
      todos: [{ id: '2', text: 'Another Todo', isCompleted: false, createdAt: 'oldTime', updatedAt: 'oldTime' }],
    };

    // Define the action to update a non-existing todo with id '1'
    const currentTime = new Date().toISOString();
    const action = updateTodo({ id: '1', text: 'Updated Todo', isCompleted: true, createdAt: currentTime, updatedAt: currentTime });
    const newState = todoReducer(state, action);

    // Verify that the state remains unchanged
    expect(newState).toEqual(state);
  });

  it('should delete an existing todo', () => {
    // Create an initial state with a todo to delete
    state = {
      todos: [{ id: '1', text: 'Todo to Delete', isCompleted: false, createdAt: 'oldTime', updatedAt: 'oldTime' }],
    };

    // Define the action to delete the todo with id '1'
    const action = deleteTodo('1');
    const newState = todoReducer(state, action);

    // Verify that the todo with id '1' is deleted from the state
    expect(newState.todos).toEqual([]);
  });
});
