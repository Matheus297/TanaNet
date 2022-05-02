import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



// Routes

import Login from '../pages/login/index';



const Stack = createNativeStackNavigator();


const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Login}
                options={{ headerShown: false }}>
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AuthRoutes;