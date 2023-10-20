import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { addTodo, updateTodo, deleteTodo } from '../../reducers/todoSlice';
import { v4 as uuidv4 } from 'uuid';

import TodoList from '../../components/TodoList/TodoList';
import { styles } from './HomeScreenStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateTodo = (data) => {
    setIsEditing(true)
    const { shouldDelete, todo, shouldAddNewRow } = data;

    if (shouldDelete) {
      // If todo needs to be deleted
      dispatch(deleteTodo(todo.id));
      setIsEditing(false)
    } else {
      const updatedTodo = todos.find((t) => t.id === todo.id);

      if (updatedTodo) {
        // Update current todo if found
        dispatch(updateTodo({ ...todo }));
        setIsEditing(false)
      }
      if (shouldAddNewRow) {
        const currentTime = new Date().toISOString();
        dispatch(
          addTodo({
            id: uuidv4(),
            text: '',
            isCompleted: false,
            createdAt: currentTime,
            updatedAt: currentTime,
          })
        );
      }
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white'}}>
      <TodoList
        title="Reminders" // TODO: Make dynamic with lists.
        todos={todos}
        onDelete={(todo) => dispatch(deleteTodo(todo.id))}
        sendDataToParent={handleUpdateTodo}
      />

      {!isEditing ? <View style={styles.footer}>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => handleUpdateTodo({ shouldAddNewRow: true, todo: {} })}
        >
          <View style={styles.plusButton}>
            <Text style={styles.plusButtonText}>+</Text>
          </View>
          <Text style={styles.addButtonText}>New Reminder</Text>
        </TouchableOpacity>
      </View> : null}
    </View>
  );
};

export default HomeScreen;
