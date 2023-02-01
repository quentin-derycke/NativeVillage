// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/Home";
import DetailsScreen from "./Screens/SousCategories";
import ProductsScreen from "./Screens/Product";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({title: route.params.categoryName})}
        />
           <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ route }) => ({title: route.params.subCategoryName})}        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
