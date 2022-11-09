import { StatusBar} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Landing from "./screens/Landing";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="landing" component={Landing}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
