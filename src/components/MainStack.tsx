import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#10B981",
                },
                headerTintColor: "#ffffff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Snap Mart"
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);