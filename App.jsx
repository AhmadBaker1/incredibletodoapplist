// App.jsx
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ToDoForm from './src/components/ToDoForm'; // Adjust the import path as needed
import HomeScreen from './src/screens/HomeScreen';  // Import HomeScreen component
import AboutScreen from './src/screens/AboutScreen'; // Import AboutScreen component

const Stack = createNativeStackNavigator(); // Create a stack navigator

function App() {
  // State for tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks((prevTasks) => [...prevTasks, taskText]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'My To-Do List' }}>
          {(props) => (
            <HomeScreen {...props} tasks={tasks} addTask={addTask} />
          )}
        </Stack.Screen>
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
