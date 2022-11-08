import React from "react";
import {ImageBackground, StyleSheet, Text, View, useWindowDimensions} from "react-native";
import Heading from "../components/UI/Heading";
import ButtonWrapper from "../components/UI/ButtonWrapper";
import CustomButton from "../components/UI/CustomButton";

const GameOver: React.FC<{ numberToGuess: number; attempts: number; resetGame: () => void }> = (props) => {

  const {height: deviceHeight, width: deviceWidth} = useWindowDimensions();

  const orientation = deviceHeight > deviceWidth ? "portrait" : "landscape";

  const imageSize = orientation === "portrait" ? deviceWidth / 2 : deviceHeight / 4;

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    marginVertical: orientation === "portrait" ? 20 : 5
  }

  return (
    <View style={styles.container}>
      <Heading>Game Over!</Heading>
      <ImageBackground style={[styles.imageBlock, imageStyle]} source={require('../assets/images/background.jpeg')}
                       resizeMode="cover"/>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          You phone needed <Text style={styles.textHighlighted}>{props.attempts}</Text> round to guess number <Text
          style={styles.textHighlighted}>{props.numberToGuess}</Text>
        </Text>
      </View>
      <ButtonWrapper>
        <CustomButton onPress={props.resetGame}>Start New Game</CustomButton>
      </ButtonWrapper>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000"
  },
  textWrapper: {
    width: "60%",
    marginVertical: 20
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff"
  },
  textHighlighted: {
    fontWeight: "700",
    color: "red"
  }
});