import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import SwipeableRow from '../../components/Swipeable/Swipeable';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Todo } from '../../types/Todo';
import { styles } from './TodoStyles';

const typingFinishedDelay = 1000; // throttle for user..

export interface Data {
  todo?: Todo
  updatedText?: string
  shouldDelete?: boolean
  shouldAddNewRow?: boolean
  id?: string
}

interface TodoItemProps {
  item: Todo;
  onDelete?: (data: Data) => void;
  sendDataToParent?: (data: Data) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  sendDataToParent,
  ...props
}) => {
  const [updatedText, setUpdatedText] = useState(item.text);
  const [isTyping, setIsTyping] = useState(false);

  const handleCompleteTodo = useCallback(() => {
    if (item) {
      const updatedTodo: Todo = { ...item, isCompleted: !item.isCompleted };
      if (sendDataToParent) {
        sendDataToParent({
          todo: updatedTodo,
        });
      }
    }
  }, [item, sendDataToParent]);

  const handleOnSubmitEditing = () => {
    if (updatedText.trim() !== '') {
      const updatedTodo: Todo = { ...item, text: updatedText };
      if (sendDataToParent) {
        sendDataToParent({
          todo: updatedTodo,
          shouldAddNewRow: true
        });
      }
    } else {
      if (sendDataToParent && onDelete) {
        sendDataToParent({
          shouldDelete: true,
          todo: item
        });
        onDelete({ id: item.id });
      }
    }
    setIsTyping(false);
  };


  const handleBlur = (a) => {
    // Handle blur event here
    if (isTyping) {
      const textValue = a.nativeEvent.text;
    }
  };

  const handleTextChange = useCallback((text: string) => {
    setUpdatedText(text);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;

    if (isTyping) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        setIsTyping(false);
        if (sendDataToParent) {
          const updatedTodo: Todo = { ...item, text: updatedText };
          sendDataToParent({
            todo: updatedTodo
          });
        }
      }, typingFinishedDelay);
    }

    return () => clearTimeout(typingTimer);
  }, [isTyping, updatedText, item, sendDataToParent]);


  // Rest of the code

  return (
    <GestureHandlerRootView style={{ flex: 1, }}>
      <SwipeableRow
        key={item.id + 'SwipeableRow'}
        rightButtons={[
          {
            text: 'Delete',
            backgroundColor: '#F44336',
            onPress: () => onDelete && onDelete({ id: item.id }),
          },
        ]}
      >
        <View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10, height: 40, alignItems: 'center' }}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={[styles.checkbox, item.isCompleted && styles.checkedCheckbox]}
              onPress={handleCompleteTodo}
            >
              {item.isCompleted && (
                <View style={styles.checkboxIcon}>
                  <Text style={styles.checkboxText}>✓</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.todoItem}>

            <TextInput
              style={[styles.todoText, item.isCompleted && styles.todoTextCompleted]}
              value={updatedText}
              onChangeText={handleTextChange}
              onBlur={handleBlur}
              editable={true}
              autoFocus={true}
              onSubmitEditing={handleOnSubmitEditing}
              {...props}
            />
          </View>
        </View>
      </SwipeableRow>
    </GestureHandlerRootView>
  );
};

export default TodoItem;
