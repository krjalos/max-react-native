import React from "react";
import Category from "../../models/category";
import CategoryItem from "./CategoryItem";
import {FlatList, StyleSheet, View} from "react-native";

const Categories: React.FC<{ categories: Category[] }> = (props) => {
  return (
    <View style={styles.landingContainer}>
      <FlatList columnWrapperStyle={styles.listColumn} data={props.categories} renderItem={({item}) => {
        return <CategoryItem category={item}/>
      }} keyExtractor={(item) => {
        return item.id
      }} numColumns={2} />
    </View>
  );
}

export default Categories;

const styles = StyleSheet.create({
  landingContainer: {
    flex: 1
  },
  listColumn: {
    justifyContent:"space-evenly"
  }
});