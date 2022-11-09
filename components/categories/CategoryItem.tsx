import React from "react";
import Category from "../../models/category";
import {StyleSheet, Text, View, useWindowDimensions, Pressable} from "react-native";

const CategoryItem:React.FC<{category: Category, navigateToCategory: () => void}> = (props) => {
  const {width, height} = useWindowDimensions();

  const portrait = height > width;

  const categorySize = portrait ? width * 0.4 : width * 0.3;
  const margin = portrait ? width * 0.03 : width * 0.015;

  const categoryStyle = {
    width:categorySize,
    height: categorySize,
    backgroundColor: props.category.color,
    marginVertical: margin,
  };

  return (
    <View style={[styles.category, categoryStyle]}>
      <Pressable onPress={props.navigateToCategory} style={({pressed})=> {
        return [styles.button, pressed ? styles.buttonPressed: null ];
      }}>
        <Text style={styles.title}>{props.category.title}</Text>
      </Pressable>
    </View>
  );
}

export default CategoryItem;

const styles = StyleSheet.create({
  category: {
    borderRadius: 5,
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
    overflow:"hidden"
  },
  button: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  buttonPressed:{
    backgroundColor:"rgba(0,0,0,0.3)"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color:"#000"
  }
});