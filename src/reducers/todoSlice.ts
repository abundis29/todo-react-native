import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';
import { TodoState } from '../types/TodoState';

// Initial state
export const initialState: TodoState = {
    todos: [],
  };

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    updateTodo: (state, action: PayloadAction<Todo>) => {
      const todoToUpdate = state.todos.find((t) => t.id === action.payload.id);
      if (todoToUpdate) {
        todoToUpdate.text = action.payload.text;
        todoToUpdate.isCompleted = action.payload.isCompleted;
        todoToUpdate.updatedAt = action.payload.updatedAt;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
