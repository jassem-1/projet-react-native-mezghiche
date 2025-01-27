import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import DiplomasScreen from "./screens/DiplomasScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import ContactScreen from "./screens/ContactScreen";

import HomeScreen from "./screens/HomeScreen";
import DiplomaDetailsScreen from "./screens/DiplomaDetailsScreen";
import ProjectDetailsScreen from "./screens/ProjectDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function DiplomasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Diplomas" component={DiplomasScreen} />
      <Stack.Screen name="DiplomaDetails" component={DiplomaDetailsScreen} />
    </Stack.Navigator>
  );
}

function ProjectsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: string = "";

            if (route.name === "Home") iconName = "home";
            else if (route.name === "Diplomas") iconName = "school";
            else if (route.name === "Projects") iconName = "briefcase";
            else if (route.name === "Contact") iconName = "mail";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Diplomas"
          component={DiplomasStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Projects"
          component={ProjectsStack}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
