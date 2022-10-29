import React, {ReactNode} from "react";
import {StyleSheet, View} from "react-native";
const ButtonWrapper: React.FC<{children: ReactNode}> = (props) => {
  return (
    <View style={styles.buttonWrapper}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
    justifyContent:"center",
    marginTop:20
  }
});

export default ButtonWrapper;