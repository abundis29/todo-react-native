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
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 8,
        fontSize: 16,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#0074E4',
        fontWeight: '600',
        fontSize: 18,
    },
    todoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
    checkboxContainer: {
        width: 30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#4CAF50',
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
        flex: 1,
        backgroundColor: 'cyan',
        borderColor: 'red',
        fontSize: 16,
        color: '#333',
    },
    todoTextCompleted: {
        fontSize: 16,
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    footer: {
        backgroundColor: 'white',
        padding: 10,
    },
    customButton: {
        flexDirection: 'row',
        marginBottom: 40,
        marginLeft: 10,
        gap: 10,
        backgroundColor: 'transparent',
        borderColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    plusButton: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 1

    },
    plusButtonText: {
        position: 'absolute',
        top: -8,
        bottom: 0,
        right: 0,
        left: 3,
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
});
