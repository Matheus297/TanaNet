import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Routes

import Home from '../pages/home/index';
import Profile from '../pages/profile/index';
import NewPost from '../pages/new-post/index';

const Tab = createBottomTabNavigator();


const AppRoutes = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
            >
            </Tab.Screen>
            <Tab.Screen
                name='NewPost'
                component={NewPost}
            >
            </Tab.Screen>
            <Tab.Screen
                name='Profile'
                component={Profile}
            >
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default AppRoutes;