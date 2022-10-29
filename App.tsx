import {StatusBar} from "expo-status-bar";
import {ImageBackground, StyleSheet, View} from 'react-native';
import NewGame from "./screens/NewGame";

export default function App() {

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <ImageBackground blurRadius={20} style={styles.backgroundImage}
                         source={require("./assets/images/background.jpeg")} resizeMode="cover" imageStyle={styles.backgroundImageStyle}>
          <View style={styles.innerWrapper}>
            <NewGame/>
          </View>
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
