import React, {useLayoutEffect} from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {MEALS, CATEGORIES} from "../data/dummy-data";

import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import MealCard from "../components/meals/MealCard";

type Props = NativeStackScreenProps<RootStackParamList, 'Category'>;


const Category:React.FC<{route: Props["route"], navigation: Props['navigation']}> = (props) => {

  const catId = props.route.params.id;

  useLayoutEffect(() => {
    const categoryName = CATEGORIES.find(cat => cat.id === catId)!.title;

    props.navigation.setOptions({
      title:categoryName
    });
  }, [CATEGORIES, catId, props.navigation])

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