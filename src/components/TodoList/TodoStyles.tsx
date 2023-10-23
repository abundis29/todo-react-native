import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
    const { colors } = useTheme()
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
                color: colors.border,
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
                fontSize: 17,
                justifyContent: 'center',
                width: 400,
            },
            todoTextCompleted: {
                color: colors.text,
                fontSize: 17,
                textDecorationLine: 'line-through',
            },
        }
    );
};
