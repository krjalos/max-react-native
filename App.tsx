import {NavigationContainer, RouteProp} from "@react-navigation/native";
import {createNativeStackNavigator, NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "./screens/RootStackParamList";

import Landing from "./screens/Landing";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator<RootStackParamList>();

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
          <Stack.Screen name="Landing" component={Landing} options={{
            title: "All Categories"
          }}/>
          <Stack.Screen name="Category" component={Category}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
