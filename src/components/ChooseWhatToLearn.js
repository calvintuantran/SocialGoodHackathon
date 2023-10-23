import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useCallback } from "react";
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
} from "react-native";
import * as SplashScreen from 'expo-splash-screen';

const ChooseWhatToLearnScreen = () => {
    const courses = [
        {
            id: 1,
            description: "Computer",
            thumbnail: require("../../assets/computer_icons8.png"),
        },
        {
            id: 2,
            description: "Social Safety",
            thumbnail: require("../../assets/social_safety_icons8.png"),
        },
        {
            id: 3,
            description: "Google",
            thumbnail: require("../../assets/google_icons8.png"),
        },
        {
            id: 4,
            description: "The Internet",
            thumbnail: require("../../assets/the_internet_icons8.png"),
        },
        {
            id: 5,
            description: "Mobile Devices",
            thumbnail: require("../../assets/mobile_devices_icons8.png"),
        },
        {
            id: 6,
            description: "Social Media",
            thumbnail: require("../../assets/social_media_icons8.png"),
        },
        {
            id: 7,
            description: "Job Skills",
            thumbnail: require("../../assets/job_skills_icons8.png"),
        },
        {
            id: 8,
            description: "Connecting with others",
            thumbnail: require("../../assets/connecting_with_others.png"),
        },
    ];
    return (
        <KeyboardAvoidingView>
            <View style={styles.container}>
                <Text style={styles.pageHeading}>What are interested in learning?</Text>
                {courses.map((course) => (
                    <View style={styles.listItem} key={course.id}>
                            <Image style={styles.tinyLogo} source={course.thumbnail} />
                        <Text style={styles.itemDescription}>{course.description}</Text>
                    </View>
                ))}
            </View>
        </KeyboardAvoidingView>
    );
};

export default ChooseWhatToLearnScreen;

const styles = StyleSheet.create({
    container: {
        fontFamily: "Kailasa-Bold",
    },
    pageHeading: {
        fontWeight: "bold",
        fontSize: 24,
        justifyContent: "space-between",
        width: "80%",
    },
    listItem: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomColor: "#757676",
        borderBottomWidth: 2,
        fontSize: 16,
        alignItems: 'center'
    },
    itemDescription: {
        paddingLeft: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
});
