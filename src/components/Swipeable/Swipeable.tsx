import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

import { RectButton } from 'react-native-gesture-handler';

import Swipeable from 'react-native-gesture-handler/Swipeable';

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
            <Animated.View key={`leftAction-${index}`} style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.leftAction, { backgroundColor: button.backgroundColor }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{button.text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    

    const renderLeftActions = (progress, _dragAnimatedValue) => {
        if (leftButtons.length === 0) return null;
      
        return (
          <View
            style={{
              width: 192,
              /* istanbul ignore next */
              flexDirection: 'row'
            }}
          >
            {leftButtons.map((button, index) =>
              renderLeftAction(button, 192 - index * 64, progress, index) // Pass index as the key
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
            <Animated.View key={`renderRight-${index}`} style={{ flex: 1, transform: [{ translateX: trans }] }}>
                <RectButton
                    style={[styles.rightAction, { backgroundColor: button.backgroundColor }]}
                    onPress={pressHandler}>
                    <Text style={styles.actionText}>{button.text}</Text>
                </RectButton>
            </Animated.View>
        );
    };

    const renderRightActions = (progress, _dragAnimatedValue) => (
        <View
            key={uuidv4()}
            style={{
                width: 192,
                flexDirection: 'row',
            }}>
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
            friction={2}
            enableTrackpadTwoFingerGesture
            leftThreshold={30}
            rightThreshold={40}
            renderLeftActions={renderLeftActions}
            renderRightActions={renderRightActions}>
            {children}
        </Swipeable>
    );
};

export default SwipeableRow;

const styles = StyleSheet.create({
    leftAction: {
        flex: 1,
        backgroundColor: '#497AFC',
        justifyContent: 'center',

    },
    actionText: {
        color: 'white',
        fontSize: 16,
        backgroundColor: 'transparent',
        padding: 10,
    },
    rightAction: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
});
