import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";

const Drawer = createDrawerNavigator();


export default function App() {

  return <NavigationContainer>
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor:"rgb(87,0,0)"
      },
      headerTintColor: "#fff"
    }}>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
        drawerActiveBackgroundColor: "#265624",
        drawerActiveTintColor: "white"
      }}/>
      <Drawer.Screen name="User" component={UserScreen}/>
    </Drawer.Navigator>
  </NavigationContainer>;
}
