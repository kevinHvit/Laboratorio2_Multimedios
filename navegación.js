import React from "react"
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; //1. importar tab
import { NavigationContainer } from "@react-navigation/native";


import Home from "./Navegacion/Home";
import Login from "./Navegacion/login";
import SignIn from "./Navegacion/SignIn";
import Product from "./Navegacion/Product";

import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function Stacks() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
        >
            <Stack.Screen
                name="Login"
                component={Login}

                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}

                options={{ headerShown: false }}
            />
           
            
           

        </Stack.Navigator>
    );
}


//const TabNav = createBottomTabNavigator();


export default function Navegacion() {
    return (
        <NavigationContainer>
            <Stacks />
        </NavigationContainer>
    );
}