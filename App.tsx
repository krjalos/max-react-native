import {StatusBar} from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  View,
  SafeAreaView,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import NewGame from "./screens/NewGame";
import {useState} from "react";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

export default function App() {

  const [gameState, setGameState] = useState<"newGame" | "game" | "gameOver">("newGame");
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [lastAttempts, setLastAttempts] = useState(0);

  const {width: deviceWidth, height: deviceHeight} = useWindowDimensions();

  const startNewGame = (number: number) => {
    setNumberToGuess(number);
    setGameState("game");
  }

  const endGame = (attempts: number) => {
    setGameState('gameOver');
    setLastAttempts(attempts);
  }

  function resetGame() {
    setLastAttempts(0);
    setGameState("newGame");
  }

  return (
    <>
      <StatusBar style="light"/>
      <ScrollView style={styles.fullHeight}>
        <KeyboardAvoidingView style={styles.fullHeight} behavior="position">
          <View style={styles.fullHeight}>
            <ImageBackground
              blurRadius={20}
              style={styles.fullHeight}
              source={require("./assets/images/background.jpeg")}
              resizeMode="cover"
              imageStyle={styles.backgroundImageStyle}
            >
              <SafeAreaView style={styles.fullHeight}>
                <View style={[styles.innerWrapper, {paddingTop: deviceHeight < 450 ? 20 : 60}]}>
                  {gameState === 'newGame' && <NewGame startGame={startNewGame}/>}
                  {gameState === 'game' && <Game numberToGuess={numberToGuess} endGame={endGame}/>}
                  {gameState === 'gameOver' && <GameOver numberToGuess={numberToGuess} attempts={lastAttempts} resetGame={resetGame}/>}
                </View>
              </SafeAreaView>
            </ImageBackground>
          </View>

        </KeyboardAvoidingView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  fullHeight: {
    flex: 1
  },
  backgroundImageStyle: {
    opacity:0.5
  },
  innerWrapper: {
    flex: 1,
    paddingTop: 60,
  },
});
