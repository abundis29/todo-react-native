import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { getStyles } from "./CheckBoxStyles";


type CheckBoxProps = {
    itemId: string;
    isCompleted: boolean;
    onPress: () => void;
};

export const CheckBox = React.memo(({ itemId, isCompleted, onPress }: CheckBoxProps) => {
    const styles = getStyles();
    return (
        <View testID={`checkbox-container-${itemId}`} style={styles.checkboxContainer}>
            <TouchableOpacity
                testID={`todo-checkbox-${itemId}`}
                style={[styles.checkbox, isCompleted && styles.checkedCheckbox]}
                onPress={onPress}
            >
                {isCompleted && (
                    <View style={styles.checkboxIcon}>
                        <Text testID={`checkbox-text-${itemId}`} style={styles.checkboxText}></Text>
                    </View>
                )}
            </TouchableOpacity>
        </View>
    )
});