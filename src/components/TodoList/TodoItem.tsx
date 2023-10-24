import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput } from 'react-native';
import SwipeableRow from '../../components/Swipeable/Swipeable';
import { Todo } from '../../types/Todo';
import { CheckBox } from '../CheckBox/CheckBox';
import { getStyles } from './TodoStyles';

const typingFinishedDelay = 100;

export interface Data {
  todo?: Todo;
  updatedText?: string;
  shouldDelete?: boolean;
  shouldAddNewRow?: boolean;
  id?: string;
}

interface TodoItemProps {
  item: Todo;
  onDelete?: (data: Data) => void;
  sendDataToParent?: (data: Data) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, onDelete, sendDataToParent, ...props }) => {
  const [updatedText, setUpdatedText] = useState(item.text);
  const [isTyping, setIsTyping] = useState(false);

  const safeSendDataToParent = useCallback((data: Data) => {
    if (sendDataToParent) {
      sendDataToParent(data);
    }
  }, [sendDataToParent]);

  const handleCompleteTodo = useCallback(() => {
    if (item) {
      const updatedTodo: Todo = { ...item, isCompleted: !item.isCompleted };
      safeSendDataToParent({ todo: updatedTodo });
    }
  }, [item, safeSendDataToParent]);

  const handleOnSubmitEditing = () => {
    if (updatedText.trim() !== '') {
      const updatedTodo: Todo = { ...item, text: updatedText };
      safeSendDataToParent({ todo: updatedTodo, shouldAddNewRow: true });
    } else {
      if (onDelete) {
        onDelete({ id: item.id });
        safeSendDataToParent({
          shouldDelete: true,
          todo: item,
        });
      }
      setIsTyping(false);
    }
  };

  const handleTextChange = useCallback((text: string) => {
    setUpdatedText(text);
    setIsTyping(true);
  }, []);

  const handleBlur = useCallback(() => {
    if (updatedText.trim() === '' && !isTyping) {
      if (onDelete) {
        onDelete({ id: item.id });
        safeSendDataToParent({
          shouldDelete: true,
          todo: item,
        });
      }
    }
  }, [updatedText, isTyping, onDelete, item, safeSendDataToParent]);

  useEffect(() => {
    let typingTimer: NodeJS.Timeout;

    if (isTyping) {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(() => {
        setIsTyping(false);
        const updatedTodo: Todo = { ...item, text: updatedText };
        safeSendDataToParent({ todo: updatedTodo });
      }, typingFinishedDelay);
    }

    return () => clearTimeout(typingTimer);
  }, [isTyping, updatedText, item, safeSendDataToParent]);

  const rightButtons = [
    {
      text: 'Delete',
      backgroundColor: '#F44336',
      onPress: () => onDelete && onDelete({ id: item.id }),
    },
  ];


  const styles = getStyles();

  return (
    <SwipeableRow key={item.id} rightButtons={rightButtons}>

      <View testID={`todo-item-${item.id}`} style={styles.container}>
        <CheckBox itemId={item.id} isCompleted={item.isCompleted} onPress={handleCompleteTodo} />
        <View style={styles.todoItem}>
          <TextInput
            testID={`todo-text-input-${item.id}`}
            style={[styles.todoText, item.isCompleted && styles.todoTextCompleted]}
            value={updatedText}
            onChangeText={handleTextChange}
            onBlur={handleBlur}
            editable
            autoFocus
            onSubmitEditing={handleOnSubmitEditing}
            {...props}
          />
        </View>
      </View>
    </SwipeableRow>
  );
};

export default TodoItem;
