import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import SwipeableRow from '../Swipeable';

describe('SwipeableRow Component', () => {
    let component;

    const leftButtons = [
        {
            text: 'Left Action 1',
            backgroundColor: 'blue',
            onPress: jest.fn(),
        },
        {
            text: 'Left Action 2',
            backgroundColor: 'green',
            onPress: jest.fn(),
        },
    ];

    const rightButtons = [
        {
            text: 'Right Action 1',
            backgroundColor: 'red',
            onPress: jest.fn(),
        },
        {
            text: 'Right Action 2',
            backgroundColor: 'yellow',
            onPress: jest.fn(),
        },
    ];

    beforeEach(() => {
        component = render(
            <SwipeableRow leftButtons={leftButtons} rightButtons={rightButtons}>
                <Text>Swipeable Content</Text>
            </SwipeableRow>
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('renders correctly', () => {
        const { getByText } = component;

        expect(getByText('Swipeable Content')).toBeDefined();
    });

    it('triggers left button actions', () => {
        const { getByText } = component;

        const leftAction1 = getByText('Left Action 1');
        const leftAction2 = getByText('Left Action 2');

        fireEvent.press(leftAction1);
        fireEvent.press(leftAction2);

        expect(leftButtons[0].onPress).toHaveBeenCalledTimes(1);
        expect(leftButtons[1].onPress).toHaveBeenCalledTimes(1);
    });

    it('triggers right button actions', () => {
        const { getByText } = component;

        const rightAction1 = getByText('Right Action 1');

        fireEvent.press(rightAction1);


        expect(rightButtons[0].onPress).toHaveBeenCalledTimes(1);
        });



    it('handles empty buttons', () => {
        // Render SwipeableRow with empty leftButtons and rightButtons
        const emptyComponent = render(
            <SwipeableRow leftButtons={[]} rightButtons={[]}>
                <Text>Swipeable Content</Text>
            </SwipeableRow>
        );

        const { getByText } = emptyComponent;

        // Verify that the content renders without errors
        expect(getByText('Swipeable Content')).toBeDefined();

        // Clean up
        emptyComponent.unmount();
    });
});
