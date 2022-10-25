import {useState} from "react";
import {Button, GestureResponderEvent, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {

  const [inputText, setInputText] = useState("");
  const [goals, setGoals] = useState<{id: string; text: string}[]>([
    {
      id:"g1",
      text: "Lorem Ipsum"
    },
    {
      id:"g2",
      text: "Test Goal"
    },
    {
      id:"g3",
      text: "Super test goal"
    },
    {
      id:"g4",
      text: "Last goal to test"
    }
  ]);

  const goalInputChangeHandler = (value: string) => {
    setInputText(value);
  }

  const addGoalHandler = () => {
    if(inputText.trim().length < 1) {
      return;
    }
    setGoals((prevState) => {
      return [...prevState, {id: Math.random().toString(), text: inputText}];
    });
  }

  const goalClickHandler = (id: string) => {
    setGoals((prevState) => {
      return prevState.filter(goal => goal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={goalInputChangeHandler} value={inputText}/>
        <Button onPress={addGoalHandler} title="Add Goal"/>
      </View>
      <View style={styles.todoListContainer}>
        <ScrollView>
          {goals.length > 0 ? goals.map(goal => <View style={styles.goalItem} key={goal.id}>
            <Text style={styles.goalItemText}>{goal.text}</Text>
            {/*<Button title="Delete" />*/}
          </View>) : <Text>List of goals...</Text>}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    paddingBottom: 24,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 20,
    width:"60%",
    marginRight: 20
  },
  todoListContainer: {
    flex: 6
  },
  goalItem: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "purple",
    marginVertical: 10,
    borderRadius:6,
    padding:8
  },
  goalItemText: {
    color:"#fff",
    fontSize: 18,
  }
});
