import { useTheme } from '@react-navigation/native';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { getStyles } from './FooterStyles';

interface FooterProps {
    children: ReactNode;
}
export const Footer: React.FC<FooterProps> = ({ children }) => {
    const { colors } = useTheme()
    const styles = getStyles(colors)
    return (
        <View style={styles.footer}>
            {children}
        </View>
    );
};
