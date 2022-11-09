import React from "react";
import {StyleSheet, View} from "react-native";
import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

import { CATEGORIES } from "../data/dummy-data";
import Categories from "../components/categories/Categories";

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;

const Landing: React.FC<{navigation: Props['navigation']}> = (props) => {

  return (
    <View style={styles.page}>
      <Categories categories={CATEGORIES}/>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  page: {
    flex:1
  }
});