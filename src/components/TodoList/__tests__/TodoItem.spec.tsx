import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TodoItem from '../TodoItem';
import { Todo } from '../../../types/Todo';

// Mock data for testing
const mockItem: Todo = {
    id: "1",
    text: 'Test Task',
    isCompleted: false,
    createdAt: '',
    updatedAt: ''
};


describe('TodoItem Component', () => {
    it('renders the component with provided item text', () => {
        const { getByTestId, getByText } = render(<TodoItem item={mockItem} />);

        // Assert that the component is rendered with the correct text
        expect(getByTestId(`todo-item-${mockItem.id}`)).toBeTruthy();
        expect(getByTestId(`todo-checkbox-${mockItem.id}`)).toBeTruthy();
        // Get the value from the TextInput element
        const textInput = getByTestId(`todo-text-input-${mockItem.id}`);
        const inputValue = textInput.props.value;

        // Check if the extracted value matches the expected text
        expect(inputValue).toBe('Test Task');
    });

    it('calls handleCompleteTodo when checkbox is pressed', () => {
        const mockSendDataToParent = jest.fn();
        const { getByTestId } = render(
            <TodoItem item={mockItem} sendDataToParent={mockSendDataToParent} />
        );
        const checkbox = getByTestId(`todo-checkbox-${mockItem.id}`);
        fireEvent.press(checkbox);
        expect(mockSendDataToParent).toHaveBeenCalledWith({
            todo: { ...mockItem, isCompleted: true },
        });
    });

    it('calls handleOnSubmitEditing when text input is submitted', () => {
        const mockSendDataToParent = jest.fn();
        const { getByTestId } = render(
            <TodoItem item={mockItem} sendDataToParent={mockSendDataToParent} />
        );
        const textInput = getByTestId(`todo-text-input-${mockItem.id}`);
        fireEvent(textInput, 'onChangeText', 'Updated Text');
        fireEvent(textInput, 'onSubmitEditing');
        expect(mockSendDataToParent).toHaveBeenCalledWith({
            todo: { ...mockItem, text: 'Updated Text' },

            shouldAddNewRow: true,
        });
    });

});

it('calls handleOnSubmitEditing and onDelete when text input is empty', () => {
    const mockSendDataToParent = jest.fn();
    const mockOnDelete = jest.fn();
    const { getByTestId } = render(
        <TodoItem item={mockItem} sendDataToParent={mockSendDataToParent} onDelete={mockOnDelete} />
    );
    const textInput = getByTestId(`todo-text-input-${mockItem.id}`);
    fireEvent(textInput, 'onChangeText', '');
    fireEvent(textInput, 'onSubmitEditing');
    expect(mockSendDataToParent).toHaveBeenCalledWith({
        shouldDelete: true,
        todo: mockItem,
    });
    expect(mockOnDelete).toHaveBeenCalledWith({ id: '1' });
});

