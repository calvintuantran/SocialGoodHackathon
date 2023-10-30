import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../authentication/Welcome';
import SignInScreen from '../authentication/SignIn';
import SignUpScreen from '../authentication/SignUp';
import ForgotPasswordScreen from '../authentication/ForgotPassword';
import Confirmation from '../authentication/Confirmation';

const AuthStack = createStackNavigator();
const AuthModalStack = createStackNavigator();

const AuthNavigator = ({ signIn }) => (
    <AuthModalStack.Navigator mode="modal" headerMode="screen">
        <AuthModalStack.Screen name="AuthPages">
            {() => (
                <AuthStack.Navigator>
                    <AuthStack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
                    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
                    <AuthStack.Screen name="SignIn">
                        {({ navigation }) => <SignInScreen signIn={signIn} navigation={navigation} />}
                    </AuthStack.Screen>
                    <AuthStack.Screen
                        name="ForgotPassword"
                        component={ForgotPasswordScreen}
                    />
                </AuthStack.Navigator>
            )}
        </AuthModalStack.Screen>
        <AuthModalStack.Screen options={{ headerShown: false }} name="Confirmation" component={Confirmation} />
    </AuthModalStack.Navigator>
);

export default AuthNavigator;