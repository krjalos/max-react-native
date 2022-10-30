import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Guess: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <View style={styles.guess}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  guess: {
    borderWidth: 4,
    borderColor: "rgb(216, 177, 110)",
    padding:30,
    marginTop: 15,
    marginBottom: 30,
    width:"100%",
    maxWidth: "55%",
  },
  text: {
    fontSize: 40,
    fontWeight: "700",
    color:"rgb(216, 177, 110)",
    textAlign:"center"
  }
});

export default Guess;