import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
        
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        backgroundColor: 'red'
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        borderRadius: 5,

    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    todoItem: {
        flex:1,
        alignItems:'flex-start',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
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

