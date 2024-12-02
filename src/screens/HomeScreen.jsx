import React from 'react';
import { View, Button, Text } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';
import MainLayout from '../layouts/MainLayout';


const HomeScreen = ({ tasks, addTask, navigation }) => {
  return (
    <MainLayout>
     <View>
      <Text>To-Do List:</Text>
      {tasks.map((task, index) => (
        <Text key={index}>{task}</Text>
      ))}
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
    </MainLayout>
  );
};

export default HomeScreen;
