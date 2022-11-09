import React from "react";
import {Text, View} from "react-native";

import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import {useRoute} from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;


const Category:React.FC<{route: Props["route"]}> = (props) => {
  const route = useRoute();
  console.log(route.params);
  console.log(props.route.params);

  return (
    <View>
      <Text>Meals Page</Text>
    </View>
  );
}

export default Category;