import React from 'react';
import {Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

//Screen
import HomePage from "./screen/tabs/HomePage";
import ProjectPage from "./screen/tabs/ProjectPage";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export function MyNavigation() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomePage} />
                <Stack.Screen name={'Project'} component={ProjectPage} />
            </Stack.Navigator>
        </NavigationContainer>
        )
}

export function MyTabs() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name={'Home'} component={HomePage} />
                <Tab.Screen name={'Project'} component={ProjectPage} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

