import { StyleSheet } from 'react-native';

export const getStyles = (colors) => {
    return StyleSheet.create(
        {
            centeredView: {
                alignItems: 'center',
                flex: 1,
                justifyContent: 'center',
            },
            container: {
                flexDirection: 'row',
                height: 36,
                paddingLeft: 10,
            },
            footer: {
                backgroundColor: colors.background,
                padding: 10,
            },
            noItemsText: {
                color: colors.background,
                fontSize: 18,
            },
            todoItem: {
                alignItems: 'flex-start',
                borderBottomColor: colors.border,
                borderBottomWidth: 0.5,
            },
            todoListContainer: {
                backgroundColor: colors.background,
                flex: 1,
            },
            todoText: {
                alignItems: 'center',
                borderColor: colors.text,
                color: colors.text,
                flex: 1,
                fontFamily: 'SF Pro Rounded',
                fontSize: 17,
                justifyContent: 'center',
                width: 400,
            },
            todoTextCompleted: {
                color: colors.text,
                fontSize: 18,
                textDecorationLine: 'line-through',
            },
        }
    );
};
