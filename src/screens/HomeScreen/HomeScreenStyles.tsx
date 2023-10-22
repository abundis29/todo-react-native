

import { StyleSheet } from 'react-native';

export const getStyles = (colors) => {
  return StyleSheet.create({
    addButton: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 4,
        justifyContent: 'center',
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
    customButton: {
        alignItems: 'center',
        backgroundColor: colors,
        // borderColor: colors.primary,
        flexDirection: 'row',
        gap: 10,
        justifyContent: 'flex-start',
        marginBottom: 40,
        marginLeft: 10,
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
    // eslint-disable-next-line react-native/no-color-literals
    plusButtonText: {
        bottom: 0,
        color: 'white', // always white
        fontSize: 30,
        fontWeight: 'bold',
        left: 3,
        position: 'absolute',
        right: 0,
        top: -8,
    },
  });
};

