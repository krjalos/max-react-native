import React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";

const Heading: React.FC<{children: React.ReactNode}> = (props) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  heading: {
    borderWidth: 3,
    borderColor: "#fff",
    padding:10,
    marginVertical: 20,
    width:400,
    maxWidth: "70%",
    alignItems: "center"
  },
  text: {
    fontSize: deviceWidth < 420 ? 24: 30,
    fontWeight: "700",
    color:"#fff"
  }
});

export default Heading;