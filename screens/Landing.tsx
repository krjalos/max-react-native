import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Categories from "../components/categories/Categories";

const Landing: React.FC = () => {
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