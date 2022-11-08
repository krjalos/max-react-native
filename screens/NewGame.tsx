import React, {useState} from "react";
import {Alert, StyleSheet, Text, TextInput, useWindowDimensions, View, ScrollView, KeyboardAvoidingView} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import Heading from "../components/UI/Heading";
import ButtonWrapper from "../components/UI/ButtonWrapper";

const NewGame: React.FC<{startGame: (number: number) => void}> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const {width: deviceWidth, height: deviceHeight} = useWindowDimensions();

  const resetInput = () => {
    setInputValue("");
  }

  const inputChangeHandler = (value: string) => {
    setInputValue(value);
  }

  const startGame = () => {
    const number = parseInt(inputValue);

    if(isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Invalid number", "Number should be between 1 and 99", [{text: "Ok", style: "cancel", onPress: resetInput}]);
      return;
    }

    props.startGame(number);
  }

  return(
    <ScrollView style={styles.fullHeight}>
      <KeyboardAvoidingView style={styles.fullHeight} behavior="position">
        <View style={styles.container}>
          <Heading>Guess My Number</Heading>
          <View style={[styles.inputContainer,{padding: deviceHeight < 420 ? 15 : 30}]}>
            <Text style={styles.inputContainerText}>Enter a number</Text>
            <TextInput style={[styles.inputContainerInput, {fontSize: deviceHeight < 420 ? 30 : 40}]} maxLength={2} value={inputValue} onChangeText={inputChangeHandler} keyboardType="number-pad"/>
            <ButtonWrapper>
              <CustomButton onPress={resetInput}>
                Reset
              </CustomButton>
              <CustomButton onPress={startGame}>
                Confirm
              </CustomButton>
            </ButtonWrapper>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default NewGame;

const styles = StyleSheet.create({
  fullHeight: {
    flex:1
  },
  container: {
    flex:1,
    alignItems:"center"
  },
  inputContainer: {
    width:"100%",
    maxWidth: "90%",
    backgroundColor:"rgb(56,7,32)",
    padding:30,
    alignItems:"center",
    borderRadius:10,
    elevation: 8,
    shadowColor:"#000",
    shadowOffset: { width: 2, height: 2},
    shadowRadius: 5,
    shadowOpacity: 1
  },
  inputContainerText: {
    color:"rgb(216, 177, 110)",
    fontSize:26,
    marginBottom:30
  },
  inputContainerInput: {
    fontSize: 40,
    fontWeight: "700",
    borderBottomWidth:2,
    borderBottomColor: "rgb(216, 177, 110)",
    color:"rgb(216, 177, 110)",
    minWidth:50,
    textAlign: "center"
  }
});