import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    checkboxContainer: {
        width: 28,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    checkedCheckbox: {
        backgroundColor: '#4CAF50',
    },
    checkboxIcon: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkboxText: {
        color: '#4CAF50',
    },
    todoText: {
        width: 300,
        flex: 1,
        borderColor: 'red',
        fontSize: 18,
        color: '#333',
    },
    todoTextCompleted: {
        fontSize: 18,
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    footer: {
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
});

