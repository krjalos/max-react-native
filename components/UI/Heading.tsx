import React from "react";
import {StyleSheet, Text, View, useWindowDimensions} from "react-native";

const Heading: React.FC<{children: React.ReactNode}> = (props) => {
  const {width: deviceWidth, height: deviceHeight} = useWindowDimensions();
  return (
    <View style={styles.heading}>
      <Text style={[styles.text, {fontSize: deviceHeight > 420 ? 30 : 24}]}>{props.children}</Text>
    </View>
  );
}

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
    fontSize: 24,
    fontWeight: "700",
    color:"#fff"
  }
});

export default Heading;