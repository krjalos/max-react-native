import React from "react";
import {GestureResponderEvent, StyleSheet} from "react-native";
import {GoalType} from "./types/types";
import {Text, View, Pressable} from "react-native";

const GoalItem: React.FC<{goal: GoalType; deleteGoal: (id: string) => void}> = (props) => {

  const pressHandler = (event: GestureResponderEvent) => {
    props.deleteGoal(props.goal.id);
  }
  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={pressHandler}>
      <View style={styles.goalItem} key={props.goal.id}>
        <Text style={styles.goalItemText}>{props.goal.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
    marginVertical: 10,
    borderRadius: 6,
    padding:8
  },
  pressed: {
    opacity:0.7
  },
  goalItemText: {
    color: "#fff",
    fontSize: 18,
  }
});