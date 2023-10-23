// HomeScreen.tsx

import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { addTodo, updateTodo, deleteTodo } from '../../reducers/todoSlice';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../../components/TodoList/TodoList';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Footer } from '../../components/Footer/Footer';
import { useTheme } from '@react-navigation/native';
import { getStyles } from './TodoScreenStyles';

const TodoScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { colors } = useTheme();
  const styles = getStyles(colors);
  const todos = useAppSelector((state) => state.todos.todos);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTodo = (data) => {
    setIsEditing(true);
    const { shouldDelete, todo, shouldAddNewRow } = data;
    if (shouldDelete) {
      dispatch(deleteTodo(todo.id));
      setIsEditing(false);
    } else {
      const updatedTodo = todos.find((t) => t.id === todo.id);
      if (updatedTodo) {
        dispatch(updateTodo({ ...todo }));
        setIsEditing(false);
      }
      if (shouldAddNewRow) {
        dispatch(
          addTodo({
            id: uuidv4(),
            text: '',
            isCompleted: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          })
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <TodoList
        title="Reminders"
        todos={todos}
        onDelete={(todo) => dispatch(deleteTodo(todo.id))}
        sendDataToParent={handleUpdateTodo}
      />
      {!isEditing ? (
        <Footer>
          <TouchableOpacity
            style={styles.customButton}
            testID="new-reminder"
            onPress={() => handleUpdateTodo({ shouldAddNewRow: true, todo: {} })}
          >
            <View style={styles.plusButton}>
              <Text style={styles.plusButtonText}>+</Text>
            </View>
            <Text style={styles.addButtonText}>New Reminder</Text>
          </TouchableOpacity>
        </Footer>
      ) : null}
    </View>

  );
};

export default TodoScreen;
