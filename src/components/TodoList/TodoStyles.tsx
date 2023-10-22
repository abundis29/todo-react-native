import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: { flex: 1, flexDirection: 'row', paddingLeft: 10, height: 40, alignItems: 'center' },
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
        flex: 1,
        alignItems: 'flex-start',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
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

