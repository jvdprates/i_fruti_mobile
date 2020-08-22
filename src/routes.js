import React from 'react';

import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MyWebview from "./pages/MyWebview";

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <MyWebview/>
    )
}