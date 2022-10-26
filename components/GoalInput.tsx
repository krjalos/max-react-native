import React, {useState} from "react";
import {Image, Modal, StyleSheet} from "react-native";

import {Button, TextInput, View} from "react-native";

const GoalInput: React.FC<{onAddGoal: (inputText: string) => void}> = (props) => {

  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState("");

  const goalInputChangeHandler = (value: string) => {
    setInputText(value);
  }

  const addGoalHandler = () => {
    if (inputText.trim().length > 0) {
      props.onAddGoal(inputText);
      setInputText("");
      setShowInput(false);
    }
  }

  const toggleMenuModal = () => {
    setShowInput(!showInput);
  }

  return (
    <>
      <Button title="Add Goal" onPress={toggleMenuModal}/>

      <Modal visible={showInput} animationType="slide">
        <View style={styles.inputContainer}>
          <Image style={styles.image} source={require('../assets/images/goal.png')}/>
          <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputChangeHandler}
                     value={inputText}/>
          <View style={styles.controlsContainer}>
            <Button onPress={addGoalHandler} title="Add Goal"/>
            <Button onPress={toggleMenuModal} title="Cancel" color="red"/>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
    shadowColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 20,
    backgroundColor:"#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
    color:"#fff"
  },
  controlsContainer: {
    width:"100%",
    marginTop:20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems:"center"
  },
  image: {
    width: 100,
    height: 100,
    marginBottom:20
  }
});