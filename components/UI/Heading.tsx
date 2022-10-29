import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Heading: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    borderWidth: 3,
    borderColor: "#fff",
    padding:10,
    marginVertical: 30,
    maxWidth: "95%"
  },
  text: {
    fontSize: 30,
    fontWeight: "700",
    color:"#fff"
  }
});

export default Heading;