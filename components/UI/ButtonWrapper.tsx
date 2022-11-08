import React, {ReactNode} from "react";
import {StyleSheet, useWindowDimensions, View} from "react-native";
const ButtonWrapper: React.FC<{children: ReactNode}> = (props) => {

  const {height: deviceHeight, width: deviceWidth} = useWindowDimensions();

  const orientation = deviceHeight > deviceWidth ? "portrait" : "landscape";

  const margin = {
    marginTop: orientation === "portrait" ? 20 : 5
  };

  return (
    <View style={[styles.buttonWrapper, margin]}>
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