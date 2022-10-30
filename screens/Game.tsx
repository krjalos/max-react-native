import React, {useState} from "react";
import {StyleSheet, Text, View, Alert, FlatList} from "react-native";
import Heading from "../components/UI/Heading";
import Guess from "../components/UI/Guess";
import ButtonWrapper from "../components/UI/ButtonWrapper";
import CustomButton from "../components/UI/CustomButton";

const Game:React.FC<{numberToGuess: number, endGame: (attempts: number) => void}> = (props) => {

  const [attempts, setAttempts] = useState<number[]>([]);
  const [upperLimit, setUpperLimit] = useState(99);
  const [lowerLimit, setLowerLimit] = useState(1);

  const guess = Math.floor((upperLimit - lowerLimit) / 2 + lowerLimit);

  if(guess === props.numberToGuess) {
    Alert.alert("This is your number!", "We guessed it!", [{text: "Ok", style: "default", onPress: endGameHandler}])
  }

  function endGameHandler(){
    props.endGame(attempts.length);
  }

  const replyHandler = (higher: boolean) => {
    if(higher){
      if(props.numberToGuess < guess) {
        Alert.alert("Please don't lie!", "Oracle told us it's actually not!", [{text: "Ok", style: "destructive"}]);
        return;
      }
      setLowerLimit(guess + 1);
    }else {
      if(props.numberToGuess > guess) {
        Alert.alert("Please don't lie!", "Oracle told us it's actually not!", [{text: "Ok", style: "destructive"}]);
        return;
      }
      setUpperLimit(guess - 1);
    }
    setAttempts((prevState) => [...prevState, guess]);
  }

  return (
    <View style={styles.container}>
      <Heading>Opponent's guess</Heading>
      <Guess>{guess}</Guess>
      <View style={styles.inputContainer}>
        <Text style={styles.inputContainerText}>Higher or Lower?</Text>
        <ButtonWrapper>
          <CustomButton onPress={replyHandler.bind(this,false)}>
            -
          </CustomButton>
          <CustomButton onPress={replyHandler.bind(this,true)}>
            +
          </CustomButton>
        </ButtonWrapper>
      </View>
      <FlatList style={styles.attemptList} data={attempts} renderItem={({item, index}) => {
        return <View style={styles.attemptListItem}>
          <Text>#{++index}</Text>
          <Text>Opponent's guess: {item}</Text>
        </View>
      }}>
      </FlatList>
    </View>
  );
}

export default Game;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
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
  attemptList : {
    width:"80%",
    marginVertical:30
  },
  attemptListItem: {
    backgroundColor: "rgb(216, 177, 110)",
    borderWidth:2,
    borderColor:"rgb(56,7,32)",
    borderRadius:20,
    width:"100%",
    paddingVertical:10,
    paddingHorizontal:10,
    justifyContent:"space-between",
    flexDirection:"row",
    marginTop:10
  }

});