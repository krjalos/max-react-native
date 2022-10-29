import React from "react";
import {Pressable, StyleSheet, Text, View} from "react-native";

const CustomButton: React.FC<{children: React.ReactNode, onPress: () => void}> = (props) => {
  return (
    <Pressable onPress={props.onPress} style={({pressed}) => {
      return pressed && styles.pressed
    }}>
      <View style={styles.buttonWrapper}>
        <Text style={styles.button}>{props.children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    minWidth: 120,
    borderRadius:20,
    backgroundColor: "rgb(106, 22,61)",
    margin: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color:"#fff",
    textAlign:"center",
    width:"100%"
  },
  pressed: {
    opacity:0.6
  }
});

export default CustomButton;