import React from "react";
import {StyleSheet, View} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Categories from "../components/categories/Categories";

const Landing: React.FC<{navigation: any}> = (props) => {

  const navigateToCategory = () => {
    props.navigation.navigate('Category');
  }


  return (
    <View style={styles.page}>
      <Categories categories={CATEGORIES} navigateToCategory={navigateToCategory}/>
    </View>
  );
}

export default Landing;

const styles = StyleSheet.create({
  page: {
    flex:1
  }
});