import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./screens/RootStackParamList";

import Landing from "./screens/Landing";
import Category from "./screens/Category";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

  const screenOptions = {
    title:"All Categories",
    headerStyle: {
      backgroundColor: "#351401"
    },
    headerTintColor: "#fff",
    contentStyle: {
      backgroundColor: "#3f2f25"
    }
  };
  
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing} options={screenOptions}/>
          <Stack.Screen name="Category" component={Category} options={{...screenOptions, title: "Meals"}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
