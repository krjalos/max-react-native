import React, {useState} from "react";
import {StyleSheet} from "react-native";

import {Button, TextInput, View} from "react-native";

const GoalInput: React.FC<{onAddGoal: (inputText: string) => void}> = (props) => {

  const [inputText, setInputText] = useState("");

  const goalInputChangeHandler = (value: string) => {
    setInputText(value);
  }

  const addGoalHandler = () => {
    if (inputText.trim().length > 0) {
      props.onAddGoal(inputText);
    }
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputChangeHandler}
                 value={inputText}/>
      <Button onPress={addGoalHandler} title="Add Goal"/>
    </View>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 20,
    width: "60%",
    marginRight: 20
  }
});