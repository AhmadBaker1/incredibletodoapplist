/**
 * My To Do List App
 *
 * @format
 */

import { useState } from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';


function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return; // We will not add empty tasks with this string
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    } else {
      alert("This task already exists.");
    }
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

export default App;
