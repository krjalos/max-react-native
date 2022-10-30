import {StatusBar} from "expo-status-bar";
import {ImageBackground, StyleSheet, View, SafeAreaView} from 'react-native';
import NewGame from "./screens/NewGame";
import {useState} from "react";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";

export default function App() {

  const [gameState, setGameState] = useState<"newGame" | "game" | "gameOver">("newGame");
  const [numberToGuess, setNumberToGuess] = useState(0);
  const [lastAttempts, setLastAttempts] = useState(0);

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
      <View style={styles.container}>
        <ImageBackground
          blurRadius={20}
          style={styles.backgroundImage}
          source={require("./assets/images/background.jpeg")}
          resizeMode="cover"
          imageStyle={styles.backgroundImageStyle}
        >
          <SafeAreaView style={styles.innerWrapper}>
            {gameState === 'newGame' && <NewGame startGame={startNewGame}/>}
            {gameState === 'game' && <Game numberToGuess={numberToGuess} endGame={endGame}/>}
            {gameState === 'gameOver' && <GameOver numberToGuess={numberToGuess} attempts={lastAttempts} resetGame={resetGame}/>}
          </SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    flex: 1
  },
  backgroundImageStyle: {
    opacity:0.5
  },
  innerWrapper: {
    flex: 1,
    paddingTop: 60
  },
});
