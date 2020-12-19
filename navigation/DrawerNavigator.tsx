import * as React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerOneParamList, DrawerParamList, DrawerTwoParamList } from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerOneScreen from "../screens/DrawerOneScreen";
import DrawerTwoScreen from "../screens/DrawerTwoScreen";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Drawer.Navigator initialRouteName="DrawerOne"
      // screenOptions={{
      //   headerStyle: { backgroundColor: 'transparent'}
      // }}
    
    >
      <Drawer.Screen name="DrawerOne" component={DrawerOneNavigator} />
      <Drawer.Screen name="DrawerTwo" component={DrawerTwoNavigator} />
    </Drawer.Navigator>
  );
}

const DrawerOneStack = createStackNavigator<DrawerOneParamList>();

function DrawerOneNavigator() {
  return (
    <DrawerOneStack.Navigator>
      <DrawerOneStack.Screen
        name="DrawerOneScreen"
        component={DrawerOneScreen}
        options={{ title: '', headerTransparent: true }}
      />
    </DrawerOneStack.Navigator>
  );
}

const DrawerTwoStack = createStackNavigator<DrawerTwoParamList>();

function DrawerTwoNavigator() {
  return (
    <DrawerTwoStack.Navigator>
      <DrawerTwoStack.Screen
        name="DrawerTwoScreen"
        component={DrawerTwoScreen}
        options={{ headerTitle: 'Drawer Two Title' }}
      />
    </DrawerTwoStack.Navigator>
  );
}
