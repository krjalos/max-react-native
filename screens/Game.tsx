import React, {useState} from "react";
import {StyleSheet, Text, View, Alert, FlatList, useWindowDimensions} from "react-native";
import Heading from "../components/UI/Heading";
import Guess from "../components/UI/Guess";
import ButtonWrapper from "../components/UI/ButtonWrapper";
import CustomButton from "../components/UI/CustomButton";

const Game:React.FC<{numberToGuess: number, endGame: (attempts: number) => void}> = (props) => {

  const [attempts, setAttempts] = useState<number[]>([]);
  const [upperLimit, setUpperLimit] = useState(99);
  const [lowerLimit, setLowerLimit] = useState(1);

  const guess = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);

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

  const {height: deviceHeight, width: deviceWidth} = useWindowDimensions();

  const orientation = deviceHeight > deviceWidth ? "portrait" : "landscape";

  return (
    <View style={[styles.general.container, styles[orientation].container]}>
      <View style={[styles[orientation].column]}>
        <View style={styles[orientation].infoWrapper}>
          <Heading style={orientation === "landscape" ? {heading: {width:"45%"}} : {}}>Opponent's guess</Heading>
          <Guess style={orientation === "landscape" ? {guess: {width:"45%", padding:10}} : {}}>{guess}</Guess>
        </View>
        <View style={[styles.general.inputContainer, styles[orientation].inputContainer]}>
          <Text style={styles.general.inputContainerText}>Higher or Lower?</Text>
          <ButtonWrapper>
            <CustomButton onPress={replyHandler.bind(this,false)}>
              -
            </CustomButton>
            <CustomButton onPress={replyHandler.bind(this,true)}>
              +
            </CustomButton>
          </ButtonWrapper>
        </View>
      </View>
      <View style={[styles[orientation].columnTwo]}>
        <FlatList style={styles.general.attemptList} data={attempts} renderItem={({item, index}) => {
          return <View style={styles.general.attemptListItem}>
            <Text>#{++index}</Text>
            <Text>Opponent's guess: {item}</Text>
          </View>
        }}>
        </FlatList>
      </View>
    </View>
  );
}

export default Game;

const styles = {
  general:  StyleSheet.create({
    container: {
      flex:1,
    },
    inputContainer: {
      width:"90%",
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
  }),
  portrait:  StyleSheet.create({
    container: {

    },
    column: {
      width:"100%",
      alignItems:"center",
    },
    columnTwo: {
      width:"100%",
      alignItems:"center",
    },
    infoWrapper: {
      width:"100%",
      alignItems: "center"
    },
    inputContainer: {

    }
  }),
  landscape: StyleSheet.create({
    container: {
      flexDirection: "row",
    },
    column: {
      width:"50%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent:"center",
    },
    columnTwo: {
      width:"50%",
      alignItems:"center",
    },
    infoWrapper: {
      width:"100%",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    inputContainer: {
      width:"100%"
    }
  })
}