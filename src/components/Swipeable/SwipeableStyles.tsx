

import { StyleSheet } from 'react-native';

export const getStyles = () => {
    return StyleSheet.create({
        actionButton: {
            flex: 1,
            justifyContent: 'center',

        },
        // eslint-disable-next-line react-native/no-color-literals
        actionText: {
            alignContent: 'center',
            color: 'white',
            fontSize: 17,
            fontWeight: '400',
            justifyContent: 'center',
            padding: 5,
        },
        leftAction: {
            flex: 1,
            justifyContent: 'center',
        },
        leftActionsContainer: {
            flexDirection: 'row',
            width: 192,
        },
        rightAction: {
            flex: 1,
            justifyContent: 'center',
        },
        rightActionsContainer: {
            flexDirection: 'row',
            width: 192,
            
        },
    });
};

