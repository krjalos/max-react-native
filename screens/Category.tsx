import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";

import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import MealCard from "../components/meals/MealCard";

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;


const Category:React.FC<{route: Props["route"]}> = (props) => {

  const catId = props.route.params.id;

  const mealsToDisplay = MEALS.filter(meal => meal.categoryIds.indexOf(catId) > -1);

  return (
    <View style={styles.wrapper}>
      <FlatList style={styles.list} data={mealsToDisplay} renderItem={({item}) => {
        return <MealCard meal={item}/>;
      }} keyExtractor={(item) => {
        return item.id;
      }}/>
    </View>
  );
}

export default Category;

const styles = StyleSheet.create({
  wrapper: {
    width:"100%",
    flex:1
  },
  list: {
    width:"100%",
    flex:1,
  }
});