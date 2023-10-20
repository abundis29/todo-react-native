import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TodoItem, { Data } from './TodoItem'; // Import the TodoItem component
import { Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[]; // Define the prop to receive a list of TODO items
  title: string;
  onDelete?: (data: Data) => void;
  sendDataToParent?: (data: Data) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, title, onDelete, sendDataToParent, ...props }) => {
  return (
    <View style={{ flex: 1 }}>
      {title ? (
        <Text style={{ fontSize: 34, fontWeight: '600', padding: 10, color: '#007AFF' }}>
          {title}
        </Text>
      ) : null}

      {todos.length === 0 ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize: 18, color: 'grey'}}>No {title.toLocaleLowerCase()}</Text>
        </View>
      ) : (
        <FlatList
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
          windowSize={5}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
};

export default TodoList;
