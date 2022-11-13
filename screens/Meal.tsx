import React, {useLayoutEffect} from "react";
import {ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {MEALS} from "../data/dummy-data";

import {RootStackParamList} from "./RootStackParamList";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import IconButton from "../components/UI/IconButton";

type Props = NativeStackScreenProps<RootStackParamList, 'Meal'>;


const Meal:React.FC<{route: Props["route"], navigation: Props['navigation']}> = (props) => {

  const mealId = props.route.params.id;

  const meal = MEALS.find(meal => meal.id === mealId)!;

  function favoriteToggle(){
    console.log("pressed");
  }

  useLayoutEffect(() => {
    const mealName = MEALS.find(meal => meal.id === mealId)!.title;

    props.navigation.setOptions({
      title:mealName,
      headerRight: () => {
        return <IconButton source={require("../assets/images/star-icon.png")} pressed={favoriteToggle}/>
      }
    });
  }, [MEALS, mealId, props.navigation]);

  return (
    <ScrollView style={styles.scrollView}>
      <ImageBackground style={styles.image} source={{uri: meal.imageUrl} } resizeMode="cover"/>
      <View style={styles.innerWrapper}>
        <Text style={styles.title}>{meal.title}</Text>
        <View style={styles.info}>
          <Text style={styles.infoItem}>{meal.duration}m</Text>
          <Text style={styles.infoItem}>{meal.complexity.toUpperCase()}</Text>
          <Text style={styles.infoItem}>{meal.affordability.toUpperCase()}</Text>
        </View>
        <View>
          <View style={styles.listHeadingWrapper}>
            <Text style={styles.listHeading}>Ingredients</Text>
          </View>
          {meal.ingredients.map((ing: string, index: number) => <View key={index} style={styles.listItemWrapper}>
            <Text style={styles.listItem}>{ing}</Text>
          </View>)}
        </View>

        <View>
          <View style={styles.listHeadingWrapper}>
            <Text style={styles.listHeading}>Steps</Text>
          </View>
          {meal.steps.map((step: string, index: number) => <View key={index} style={styles.listItemWrapper}>
            <Text style={styles.listItem}>{step}</Text>
          </View>)}
        </View>
      </View>
    </ScrollView>
  );
}

export default Meal;

const styles = StyleSheet.create({
  scrollView: {
    marginBottom:32
  },
  image: {
    height:240
  },
  innerWrapper: {
    paddingHorizontal: 30
  },
  title: {
    textAlign:"center",
    fontSize:18,
    fontWeight:"700",
    margin:10,
    color:"#fff"
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
    marginHorizontal: 5,
    color:"rgb(180, 165, 158)"
  },
  listHeadingWrapper: {
    borderBottomWidth:2,
    borderBottomColor:"rgb(186, 160, 150)",
    paddingVertical:5,
    marginTop: 5
  },
  listHeading: {
    color:"rgb(186, 160, 150)",
    fontSize:16,
    fontWeight:"700",
    textAlign:"center",
  },
  listItemWrapper: {
    backgroundColor:"rgb(186, 160, 150)",
    marginTop: 8,
    padding:3,
    borderRadius:5,
  },
  listItem: {
    color:"rgb(73,49,39)",
    textAlign:"center"
  }
});