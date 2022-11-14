import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();


export default function App() {

  return <NavigationContainer>
    <Tabs.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: "rgb(87,0,0)"
      },
      headerTintColor: "#fff",
      tabBarActiveTintColor: "rgb(87,0,0)"
    }}>
      <Tabs.Screen name="Welcome" component={WelcomeScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color}/>
      }}/>
      <Tabs.Screen name="User" component={UserScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color}/>
      }}/>
    </Tabs.Navigator>
  </NavigationContainer>;
}
