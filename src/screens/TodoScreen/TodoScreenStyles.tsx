

import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
    const { colors } = useTheme()
    return StyleSheet.create({
        addButton: {
            alignItems: 'flex-start',
            backgroundColor: colors.primary,
            borderRadius: 4,
            justifyContent: 'flex-start',
            marginBottom: 30,
            padding: 10,
        },
        addButtonText: {
            color: colors.primary,
            fontSize: 18,
            fontWeight: '600',
            lineHeight: 0
        },
        container: {
            backgroundColor: colors.background,
            flex: 1,
        },
        footer: {
            backgroundColor: colors.background,
            padding: 10,
        },
        input: {
            borderColor: colors.border,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 16,
            height: 40,
            marginBottom: 20,
            paddingHorizontal: 8,
        },
     
        plusButton: {
            alignItems: 'center',
            backgroundColor: colors.primary,
            borderRadius: 20,
            height: 25,
            justifyContent: 'center',
            padding: 1,
            textAlign: 'center',
            width: 25
        },
        plusButtonContainer: {
            alignItems: 'center',
            backgroundColor: colors.background,
            flexDirection: 'row',
            gap: 10,
            justifyContent: 'center',
            marginBottom: 40,
            marginLeft: 10,
        },
        // eslint-disable-next-line react-native/no-color-literals
        plusButtonText: {
            alignContent: 'center',
            color: 'white', // always white
            justifyContent: 'center',
          
        },
        
    });
};

