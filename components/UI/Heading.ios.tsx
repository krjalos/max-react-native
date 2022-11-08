import React from "react";
import {StyleSheet, Text, View, useWindowDimensions, Platform} from "react-native";

const Heading: React.FC<{children: React.ReactNode, style?: {text?: {}, heading?: {}}}> = (props) => {
  const {height: deviceHeight} = useWindowDimensions();
  return (
    <View style={[styles.heading, props.style && props.style.heading ? props.style.heading : {}]}>
      <Text style={[styles.text, {fontSize: deviceHeight > 420 ? 30 : 24}, props.style && props.style.text ? props.style.text : {}]}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    borderColor: "#fff",
    padding:10,
    marginVertical: 20,
    width:400,
    maxWidth: "70%",
    alignItems: "center"
  },
  text: {
    fontSize: 24,
    fontWeight: "700",
    color:"#fff",
    textAlign: "center"
  }
});

export default Heading;