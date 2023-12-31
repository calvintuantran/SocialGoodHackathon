import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './src/navigation/Index';
import config from './src/aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(config);

export default function App() {

    return (
        <View style={styles.container}>
            <AppNavigation />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
