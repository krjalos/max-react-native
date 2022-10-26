import {useState} from "react";

import {FlatList, ListRenderItemInfo, View, StyleSheet} from 'react-native';
import {StatusBar} from "expo-status-bar";

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

  const deleteGoal = (id: string) => {
    setGoals(prevState => prevState.filter(goal => goal.id !== id));
  }


  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <GoalInput onAddGoal={addGoal}/>
        <View style={styles.todoListContainer}>
          <FlatList data={goals} renderItem={(itemData: ListRenderItemInfo<GoalType>) => {
            return (
              <GoalItem goal={itemData.item} deleteGoal={deleteGoal}/>
            );
          }} keyExtractor={(item, index) => {
            return item.id
          }}/>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16
  },
  todoListContainer: {
    marginTop: 30
  },

});