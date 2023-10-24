import React from 'react';
import { View, Text, } from 'react-native';
import TodoItem, { Data } from './TodoItem';
import { Todo } from '../../types/Todo';
import { getStyles } from './TodoStyles';
import Label from '../Label/Label';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';

interface TodoListProps {
  todos: Todo[];
  title: string;
  onDelete?: (data: Data) => void;
  sendDataToParent?: (data: Data) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, title, onDelete, sendDataToParent, ...props }) => {
  const styles = getStyles();
  const renderTitle = title ? <Label title={title} /> : null;

  const renderNoItemsMessage = (
    <View style={styles.centeredView}>
      <Text style={styles.noItemsText}>No {title.toLocaleLowerCase()}</Text>
    </View>
  );

  const renderTodoList = (
      <KeyboardAwareFlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onDelete={onDelete}
            sendDataToParent={sendDataToParent}
            {...props}
          />
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={5} // Virtual Scrolling
        windowSize={5}
        removeClippedSubviews={true}
      />

  );

  return (
    <View style={styles.todoListContainer}>
      {renderTitle}
      {todos.length === 0 ? renderNoItemsMessage : renderTodoList}
    </View>
  );
};

export default TodoList;
