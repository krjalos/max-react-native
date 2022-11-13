import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import {Ionicons} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();


export default function App() {

  return <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:"rgb(87,0,0)"
      },
      headerTintColor: "#fff",
      drawerActiveBackgroundColor: "#265624",
      drawerActiveTintColor: "white"
    }}>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
        drawerLabel:"Welcome screen",
        drawerIcon: ({color, size}) => <Ionicons name="home" size={size} color={color}/>
      }}/>
      <Drawer.Screen name="User" component={UserScreen} options={{
        drawerLabel:"User screen",
        drawerIcon: ({color, size}) => <Ionicons name="person" size={size} color={color}/>
      }}/>
    </Drawer.Navigator>
  </NavigationContainer>;
}
