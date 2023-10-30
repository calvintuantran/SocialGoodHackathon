import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: "center",
        backgroundColor: 'fff',
        borderRadius: 10,
        marginTop: 15,
        padding: 15,
        width: "80%",

    },
    buttonText: {
        fontSize: 16,
        fontWeight: "700",
        color: '#2E69FF',
    },
});

const skipButton = ({ onPress, children, backgroundColor }) => {
    const btnStyle = backgroundColor ? [styles.buttonStyle, { backgroundColor }] : styles.buttonStyle;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={btnStyle}
        >
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

export default skipButton;