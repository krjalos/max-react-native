import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";

const Header:React.FC<{children: React.ReactNode}> = (props) => {
  console.log(StatusBar.currentHeight);
  return (
    <View style={styles.header}>
      <Text>{props.children}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {

  }
});