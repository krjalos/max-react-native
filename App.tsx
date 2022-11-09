import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Landing from "./screens/Landing";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing}/>
          <Stack.Screen name="Category" component={Category}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
