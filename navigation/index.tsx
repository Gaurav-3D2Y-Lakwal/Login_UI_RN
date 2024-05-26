import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";

import { RootStackParamList } from "../types";

const theme ={
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.background
  }

}
export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}


const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = ()=>{
  return(
    <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="Welcome" component={Welcome}/>
    <RootStack.Screen name="Login" component={LoginScreen}/>
    <RootStack.Screen name="Register" component={RegisterScreen}/>
  </RootStack.Navigator>

  )
}