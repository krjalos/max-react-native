import React from "react";
import {ImageBackground, Pressable, StyleSheet, View} from "react-native";

const IconButton:React.FC<{source: {}, pressed: () => void}> = (props) => {
  return (
    <Pressable onPress={props.pressed} style={({pressed})=> {
      return pressed ? styles.pressed : null;
    }}>
      <View>
        <ImageBackground style={styles.icon} source={props.source} resizeMode="contain"/>
      </View>
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  icon: {
    width:20,
    height:20,
  },
  pressed: {
    opacity:0.7
  },

});