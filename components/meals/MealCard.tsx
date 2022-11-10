import {ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";
import Meal from "../../models/meal";
import React from "react";

const MealCard: React.FC<{ meal: Meal }> = ({meal}) => {
  return (
    <View style={styles.cardWrapper}>
      <Pressable style={({pressed}) => {
        return pressed ? styles.pressed : null;
      }}>
        <ImageBackground source={{uri: meal.imageUrl}} style={styles.image} resizeMode="cover"/>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.info}>
          <Text style={styles.infoItem}>{meal.duration}m</Text>
          <Text style={styles.infoItem}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.infoItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealCard;

const styles = StyleSheet.create({
  cardWrapper: {
    overflow: "hidden",
    margin: 20,
    borderRadius:8,
    backgroundColor:"#fff"
  },
  image: {
    width: "100%",
    height: 200
  },
  pressed: {
    opacity:0.7
  },
  title: {
    textAlign:"center",
    fontSize:18,
    fontWeight:"700",
    margin:10
  },
  info: {
    flexDirection:"row",
    justifyContent:"center",
    marginTop:15,
    marginBottom: 10,
    marginHorizontal: 5
  },
  infoItem: {
    fontSize:13,
    marginHorizontal: 5
  }
});