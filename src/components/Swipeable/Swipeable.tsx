import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import colors from '../../utils/colors';

interface SwipeableButtonRow {
    text: string;
    backgroundColor: string;
    onPress?: () => void;
}

interface Props {
    children: JSX.Element | JSX.Element[],
    leftButtons?: SwipeableButtonRow[],
    rightButtons?: SwipeableButtonRow[],
}

const SwipeableRow: React.FC<Props> = ({
    children,
    leftButtons = [],
    rightButtons = [],
}) => {
    const swipeableRow = useRef<Swipeable | null>(null);

    const renderLeftAction = (button, x, progress, index) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [-x, 0], // Use negative x to slide in from the left
        });
        const pressHandler = () => {
            button.onPress && button.onPress();
            close();
        };
        return (
            <Animated.View key={`leftAction-${index}`} style={[styles.leftAction, { backgroundColor: button.backgroundColor, transform: [{ translateX: trans }] }]}>
                <RectButton
                    style={styles.actionButton}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{button.text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    const renderLeftActions = (progress) => {
        if (leftButtons.length === 0) return null;

        return (
            <View style={styles.leftActionsContainer}>
                {leftButtons.map((button, index) =>
                    renderLeftAction(button, 192 - index * 64, progress, index)
                )}
            </View>
        );
    };

    const renderRightAction = (button, x, progress, index) => {
        const trans = progress.interpolate({
            inputRange: [0, 1],
            outputRange: [x, 0],
        });
        const pressHandler = () => {
            button.onPress && button.onPress();
            close();
        };

        return (
            <Animated.View key={`rightAction-${index}`} style={[styles.rightAction, { backgroundColor: button.backgroundColor, transform: [{ translateX: trans }] }]}>
                <RectButton
                    style={styles.actionButton}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{button.text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    const renderRightActions = (progress) => (
        <View style={styles.rightActionsContainer}>
            {rightButtons.map((button, index) =>
                renderRightAction(button, 192 - index * 64, progress, index)
            )}
        </View>
    );

    const close = () => {
        swipeableRow.current.close();
    };

    return (
        <Swipeable
            ref={swipeableRow}
            friction={3}
            enableTrackpadTwoFingerGesture
            leftThreshold={30}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            {children}
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    actionButton: {
        flex: 1,
        justifyContent: 'center',
    },
    actionText: {
        alignContent: 'center',
        backgroundColor: colors.transparent,
        color: colors.white,
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

export default SwipeableRow;
