import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { getStyles } from './FooterStyles';

interface FooterProps {
    children: ReactNode;
}
export const Footer: React.FC<FooterProps> = ({ children }) => {
    const styles = getStyles()
    return (
        <View style={styles.footer}>
            {children}
        </View>
    );
};
