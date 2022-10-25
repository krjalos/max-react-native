import {useState} from "react";
import {StyleSheet} from "react-native";

import {FlatList, ListRenderItemInfo, View} from 'react-native';
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

import {GoalType} from "./components/types/types";

export default function App() {
  const [goals, setGoals] = useState<GoalType[]>([
    {
      id: "g1",
      text: "Lorem Ipsum"
    },
    {
      id: "g2",
      text: "Test Goal"
    },
    {
      id: "g3",
      text: "Super test goal"
    },
    {
      id: "g4",
      text: "Last goal to test"
    }
  ]);

  const addGoal = (inputText: string) => {

    const id = Math.random().toString();

    setGoals((prevState) => {
      return [...prevState, {id: id, text: inputText}];
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoal}/>
      <View style={styles.todoListContainer}>
        <FlatList data={goals} renderItem={(itemData: ListRenderItemInfo<GoalType>) => {
          return (
            <GoalItem goal={itemData.item}/>
          );
        }} keyExtractor={(item, index) => {
          return item.id
        }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  todoListContainer: {
    flex: 6
  },

});