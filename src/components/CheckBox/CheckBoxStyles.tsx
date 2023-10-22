import { StyleSheet } from 'react-native';

export const getStyles = (colors) => {
  return StyleSheet.create({
    checkbox: {
      alignItems: 'center',
      borderColor: colors.border,
      borderRadius: 20,
      borderWidth: 2,
      height: 22,
      justifyContent: 'center',
      width: 22,
      
    },
    checkboxContainer: {
      
      alignItems: 'flex-start',
      // justifyContent: 'flex-start',
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 4,
    

      
      // width: 22,

    },
    checkboxIcon: {
      alignItems: 'center',
      backgroundColor: colors.white, // Use theme colors,
      borderRadius: 9,
      height: 18,
      justifyContent: 'center',
      width: 18,
    },
    checkboxText: {
      color: colors.green, // Use theme colors
    },
    checkedCheckbox: {
      backgroundColor: colors.primary, // Use theme colors
      padding: 0,
    },
    footer: {
      backgroundColor: colors.white, // Use theme colors
      padding: 10,
    },
    todoText: {
      borderColor: colors.border, // Use theme colors
      color: colors.text, // Use theme colors
      flex: 1,
      fontSize: 18,
      width: 300,
    },
    todoTextCompleted: {
      color: colors.grey, // Use theme colors
      fontSize: 18,
      textDecorationLine: 'line-through',
    },
  });
};

