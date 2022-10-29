import React, {useRef, useState} from "react";
import {StyleSheet, Text, TextInput, View} from "react-native";
import CustomButton from "../components/UI/CustomButton";
import Heading from "../components/UI/Heading";
import ButtonWrapper from "../components/UI/ButtonWrapper";
import Promt from "../components/helpers/Promt";

const NewGame: React.FC = () => {

  const [showPromt, setShowPromt] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const resetInput = () => {
    setInputValue("");
  }

  const inputChangeHandler = (value: string) => {
    setInputValue(value);
  }

  const startGame = () => {
    const number = parseFloat(inputValue);

    if(!Number.isInteger(number) || number < 1 || number > 99) {
      setShowPromt(true);
    }
  }

  const togglePromt = () => {
    setShowPromt((prevState) => !prevState);
  }

  return(
    <>
      <Promt visible={showPromt} content={{heading: "Invalid number", content: "Number should be between 1 and 99", button:"ok"}} onClose={togglePromt}/>
      <View style={styles.container}>
        <Heading>Guess My Number</Heading>
        <View style={styles.inputContainer}>
          <Text style={styles.inputContainerText}>Enter a number</Text>
          <TextInput style={styles.inputContainerInput} maxLength={2} value={inputValue} onChangeText={inputChangeHandler} keyboardType="number-pad"/>
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
    </>
  );
}

export default NewGame;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    paddingTop: 100
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