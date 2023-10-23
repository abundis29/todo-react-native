import { StyleSheet } from 'react-native';

export const getStyles = (colors) => {
    return StyleSheet.create({
        footer: {
            alignItems: 'flex-start',
            backgroundColor: colors.background,
            borderTopColor: colors.separator,
            borderTopWidth: 0.3,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
        },
    });
};
