import { render, fireEvent, act } from '@testing-library/react-native';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { addTodo, deleteTodo } from '../../../reducers/todoSlice';
import TodoScreen from '../TodoScreen';
import * as hooks from '../../../hooks/useAppDispatch';

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const KeyboardAwareFlatList = ({ ...props }) => {
    if (props.data && props.renderItem) {
      return props.renderItem({ item: props.data[0] }); 
    }
    return null;
  };
  return { KeyboardAwareFlatList };
});

jest.mock('../../../hooks/useAppDispatch');

describe('HomeScreen', () => {
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore({
      todos: {
        todos: [
          {
            id: 'id1',
            text: 'testTodo',
            completed: false,
          },
        ],
      },
    });
  });

  it('renders Reminders title by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
    expect(getByText('Reminders')).toBeTruthy();
  });

  it('renders New Reminder button by default', () => {
    const { getByText } = render(
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
    expect(getByText('New Reminder')).toBeTruthy();
  });

  it('calls dispatch with addTodo action when New Reminder button is pressed', () => {
    const mockDispatch = jest.fn();

    (hooks.useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

    const { getByTestId } = render(
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );

    fireEvent.press(getByTestId('add-todo'));

    expect(mockDispatch).toHaveBeenCalledWith(addTodo(expect.any(Object)))
  });

  it('calls dispatch with updateTodo action when a task is completed', () => {
    const mockDispatch = jest.fn();

    (hooks.useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

    const { getByTestId } = render(
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );

    act(() => {
      fireEvent.press(getByTestId('todo-checkbox-id1'));
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'todos/updateTodo',
      payload: expect.objectContaining({
        isCompleted: true,
      }),
    });

    expect(mockDispatch).toHaveBeenCalledTimes(1);

    expect(mockDispatch.mock.calls[0][0]).toMatchObject({
      type: 'todos/updateTodo',
      payload: expect.objectContaining({
        isCompleted: true,
      }),
    });


  });

  it('calls dispatch with deleteTodo action when onDelete is called', () => {
    const mockDispatch = jest.fn();

    (hooks.useAppDispatch as jest.Mock).mockImplementation(() => mockDispatch);

    const todoToDelete = { id: 'id1', text: 'testTodo' };

    const { getByText } = render(
      <Provider store={store}>
        <TodoScreen todos={[todoToDelete]} />
      </Provider>
    );

    fireEvent.press(getByText('Delete'));

    expect(mockDispatch).toHaveBeenCalledWith(deleteTodo(todoToDelete.id));
  });
});
