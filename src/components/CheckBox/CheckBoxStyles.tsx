import { useTheme } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const getStyles = () => {
  const { colors } = useTheme()
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
      paddingBottom: 4,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 4,
    },
    checkboxIcon: {
      alignItems: 'center',
      backgroundColor: colors.primary,
      borderRadius: 9,
      height: 18,
      justifyContent: 'center',
      width: 18,
    },
    checkboxText: {
      color: colors.text,
    },
    checkedCheckbox: {
      backgroundColor: colors.primary,
      padding: 0,
    },
  });
};

