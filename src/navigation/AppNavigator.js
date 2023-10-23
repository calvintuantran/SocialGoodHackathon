import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const AppStack = createStackNavigator();

export default function App({ signOut }) {
    return (
        <AppStack.Navigator>
            <AppStack.Screen
                name="Home"
                children={({ navigation }) => (
                    <Home signOut={signOut} navigation={navigation} />
            )}
            />
        </AppStack.Navigator>
    );
}