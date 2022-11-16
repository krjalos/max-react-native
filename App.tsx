import React from "react";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RootStackParamList} from "./screens/RootStackParamList";

import Landing from "./screens/Landing";
import Category from "./screens/Category";
import Meal from "./screens/Meal";
import Favorites from "./screens/Favorites";

const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

const DrawerNavigator:React.FC = () => {
  return (
    <Drawer.Navigator useLegacyImplementation={true} screenOptions={{
      headerStyle: {
        backgroundColor: "#351401"
      },
      headerTintColor: "#fff",
      sceneContainerStyle: {
        backgroundColor: "#3f2f25"
      }
    }}>
      <Drawer.Screen name="Meals" component={Landing}/>
      <Drawer.Screen name="Favorites" component={Favorites}/>
    </Drawer.Navigator>
  );
}


export default function App() {

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: "#351401"
          },
          headerTintColor: "#fff",
          contentStyle: {
            backgroundColor: "#3f2f25"
          }
        }}>
          <Stack.Screen name="Landing" component={DrawerNavigator} options={{
            title: "All Categories",
            headerShown: false}}/>
          <Stack.Screen name="Category" component={Category}/>
          <Stack.Screen name="Meal" component={Meal}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
