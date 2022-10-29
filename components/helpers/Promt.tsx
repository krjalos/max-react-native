import React from "react";
import {Button, Modal, StyleSheet, Text, View} from "react-native";

const Promt: React.FC<{visible: boolean, content:{heading: string; content: string, button:string;}, onClose: () => void}> = (props) => {
  return (
    <Modal transparent={true} visible={props.visible} animationType="fade">
      <View style={styles.outerWrapper}>
        <View style={styles.innerWrapper}>
          <Text style={styles.heading}>{props.content.heading}</Text>
          <Text>{props.content.content}</Text>
          <View style={styles.button}>
            <Button title={props.content.button} onPress={props.onClose}/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default Promt;

const styles = StyleSheet.create({
  outerWrapper: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  innerWrapper: {
    backgroundColor:"#fff",
    width:"90%",
    padding:20,
  },
  heading: {
    fontSize:22,
    fontWeight:"700",
    marginBottom: 10
  },
  button: {
    alignSelf: "flex-end",
    marginTop: 20
  }
});