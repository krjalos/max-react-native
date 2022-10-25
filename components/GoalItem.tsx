import React from "react";
import {StyleSheet} from "react-native";
import {GoalType} from "./types/types";
import {Text, View} from "react-native";

const GoalItem: React.FC<{goal: GoalType}> = (props) => {
  return (
    <View style={styles.goalItem} key={props.goal.id}>
      <Text style={styles.goalItemText}>{props.goal.text}</Text>
    </View>
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
  goalItemText: {
    color: "#fff",
    fontSize: 18,
  }
});