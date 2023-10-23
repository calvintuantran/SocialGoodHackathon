import React, { useState } from 'react';
import {
    View, StyleSheet, Text,
} from 'react-native';
import { Auth } from 'aws-amplify';
import Button from '../components/Button';
import Input from '../components/Input';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 50,
    },
});

export default function SignUp({ navigation }) {
    const [given_name, onChangeName] = useState('');
    const [family_name, onChangeLastName] = useState('');
    const [birthdate, onChangeDOB] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [repeatPassword, onChangeRepeatPassword] = useState('');

    const [invalidMessage, setInvalidMessage] = useState(null);

    const signUp = async () => {
        const validPassword = password.length > 7 && (password === repeatPassword);
        if (validPassword) {
            setInvalidMessage(null);
            Auth.signUp({
                username: email,
                password,
                attributes: {
                    email, // optional
                    given_name,
                    family_name,
                    birthdate,
                },
                validationData: [], // optional
            })
                .then((data) => {
                    console.log(data);
                    console.log('navigation: ', navigation);
                    navigation.navigate('Confirmation', { email });
                })
                .catch((err) => {
                    if (err.message) {
                        setInvalidMessage(err.message);
                    }
                    console.log(err);
                });
        } else {
            setInvalidMessage('Passwords must match and have greater length than 8.');
        }
    };

    return (
        <View style={styles.container}>
            <Input
                value={given_name}
                placeholder="Name"
                onChange={(text) => onChangeName(text)}
                autoFocus
            />
            <Input
                value={family_name}
                placeholder="Last Name"
                onChange={(text) => onChangeLastName(text)}
                autoFocus
            />
            <Input
                value={birthdate}
                placeholder="mm/DD/yyyy"
                onChange={(text) => onChangeDOB(text)}
                autoFocus
            />
            <Input
                value={email}
                placeholder="email@example.com"
                onChange={(text) => onChangeEmail(text)}
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
            />
            <Input
                value={password}
                placeholder="Password"
                onChange={(text) => onChangePassword(text)}
                secureTextEntry
                autoCompleteType="password"
            />
            <Input
                value={repeatPassword}
                placeholder="Repeat password"
                onChange={(text) => onChangeRepeatPassword(text)}
                secureTextEntry
                autoCompleteType="password"
            />
            <Button
                onPress={() => signUp()}
            >
                SIGN UP
            </Button>
            <Text>
                {invalidMessage}
            </Text>
        </View>
    );
}