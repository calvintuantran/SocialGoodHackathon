import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    image
  } from "react-native";

const ChooseWhatToLearnScreen = () => {
    return (
        <View>
            <Text style={styles.pageHeading}>What are interested in learning?</Text>
            <View>
                <Image
                source={{uri: '../../assets/computer_icons8.png'}}
                />
                <Text>Computer</Text>
            </View>
        </View>
    )
}

export default ChooseWhatToLearnScreen;

const styles = StyleSheet.create({
    pageHeading: {
        fontWeight: 'bold'
    }
  });