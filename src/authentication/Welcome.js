import React from 'react';
import {
    Text, View, StyleSheet,
} from 'react-native';
import Button from '../components/Button';
import SkipButton from "../components/SkipButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: '700',
        color: '#757676',
        padding: 15,
    },
    button: {
        marginTop: 5,
        width: "80%",
        alignItems: "center",
    },
});

const Welcome = ({ navigation }) => (
    <View style={styles.container}>
            <View style={styles.content}>
                <Text
                    style={styles.title}
                >
                    Welcome to your learning journey!
                </Text>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('SignIn')}>
                        SIGN IN
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={() => navigation.navigate('SignUp')}>
                        SIGN UP
                    </Button>
                </View>
                <View>
                    <SkipButton>
                        Skip for now
                    </SkipButton>
                </View>
            </View>
    </View>
);

export default Welcome;