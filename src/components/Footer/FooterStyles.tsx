import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        footer: {
            alignItems: 'flex-start',
            backgroundColor: colors.background,
            borderTopColor: colors.border,
            borderTopWidth: 0.3,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            padding: 10,
        },
    });
};
