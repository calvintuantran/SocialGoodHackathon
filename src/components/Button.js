import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: "center",
        backgroundColor: '#0782F9',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
        width: "80%",

    },
    textStyle: {
        fontSize: 16,
        fontWeight: "700",
        color: 'white',
    },
});

const Button = ({ onPress, children, backgroundColor }) => {
    const btnStyle = backgroundColor ? [styles.buttonStyle, { backgroundColor }] : styles.buttonStyle;
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor = "#003DCC"
            style={btnStyle}
        >
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableHighlight>
    );
};

export default Button;