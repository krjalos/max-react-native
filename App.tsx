import {SafeAreaView, StyleSheet, View} from "react-native";
import Header from "./components/Header";
import Landing from "./screens/Landing";

export default function App() {
  
  return (
    <>
      <View style={styles.container}>
        {/* <Header>All Categories</Header> */}
        <Landing/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#432616",
  }
});
