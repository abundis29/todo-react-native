

import { StyleSheet } from 'react-native';

export const getStyles = (colors) => {
    return StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            flex: 1,
            marginTop: 47,
            padding: 16,
        },
        dashboard: {
            marginTop: 24,
        },
        dashboardItem: {
            backgroundColor: colors.cardBackground,
            borderRadius: 8,
            marginVertical: 8,
            padding: 16,
        },
        dashboardItemText: {
            color: colors.primary,
            fontSize: 20,
        },
        errorText: {
            color: colors.error,
            fontSize: 16,
            marginTop: 10,
        },
        failureContainer: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
        },
        failureText: {
            color: colors.notification,
            fontSize: 24,

        },
        header: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headerText: {
            color: colors.primary,
            fontSize: 28,
            fontWeight: 'bold',
        },
        loadingText: {
            color: colors.white,
            fontSize: 20,
        },
        settingsButton: {
            padding: 8,
        },
        settingsButtonText: {
            color: colors.primary,
            fontSize: 16,
        },
        text: {
            color: colors.primary,
            fontSize: 24,
            fontWeight: 'bold',
        },
    });
};



