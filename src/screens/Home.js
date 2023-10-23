import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';
import ChooseWhatToLearnScreen from "../components/ChooseWhatToLearn"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 16,

    },
});

export default function Home({ navigation, signOut }) {
    const handleNavigateToChooseWhatToLearn = () => {
        navigation.navigate('ChooseWhatToLearnScreen')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You are logged in</Text>
            <Button onPress={handleNavigateToChooseWhatToLearn}>Continue to topics</Button>
            <Button onPress={() => signOut()}>Sign Out</Button>
        </View>
    )
}