import React from 'react';

import { NavigationContainer, } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import MyWebview from "./pages/MyWebview";

const BottomTab = createBottomTabNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <HomeRouter />
        </NavigationContainer>
    )
}

function HomeRouter() {
    return (
        <BottomTab.Navigator headerMode="none">
            <BottomTab.Screen
                name="Voltar ao Início"
                component={MyWebview}
                tabBarOptions={{
                    labelPosition: "beside-icon"
                }}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <MaterialIcons name="store" size={size} color={'#0e8512'} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}