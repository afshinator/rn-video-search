import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerOneParamList,
  DrawerParamList,
  DrawerTwoParamList,
} from "../types";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { createStackNavigator } from "@react-navigation/stack";
import ResultsStart from "../screens/ResultsStart";
import SearchStart from "./../screens/SearchStart";
import SearchStats from "../screens/SearchStats";
import { DataProvider } from "../hooks/useGlobalReducer";

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  return (
    <DataProvider>
      <Drawer.Navigator
        initialRouteName="Search Term"
        // screenOptions={{
        //   headerStyle: { backgroundColor: 'transparent'}
        // }}
      >
        <Drawer.Screen name="Search Term" component={DrawerOneNavigator} />
        <Drawer.Screen name="Results Stats" component={DrawerTwoNavigator} />
      </Drawer.Navigator>
    </DataProvider>
  );
}

const DrawerOneStack = createStackNavigator<DrawerOneParamList>();

function DrawerOneNavigator() {
  return (
    <DrawerOneStack.Navigator>
      <DrawerOneStack.Screen
        name="SearchStart"
        component={SearchStart}
        options={{ title: "", headerTransparent: true }}
      />
      <DrawerOneStack.Screen
        name="SearchStats"
        component={SearchStats}
        options={{ title: "", headerTransparent: true }}
      />
    </DrawerOneStack.Navigator>
  );
}

const DrawerTwoStack = createStackNavigator<DrawerTwoParamList>();

function DrawerTwoNavigator() {
  return (
    <DrawerTwoStack.Navigator>
      <DrawerTwoStack.Screen
        name="DrawerTwoScreenOne"
        component={ResultsStart}
        options={{ headerTitle: "Drawer Two Title" }}
      />
    </DrawerTwoStack.Navigator>
  );
}
