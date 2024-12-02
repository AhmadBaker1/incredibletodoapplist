import React from 'react';
import { View, Text } from 'react-native';
import MainLayout from '../layouts/MainLayout';


const AboutScreen = () => {
  return (
    <MainLayout>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>App Name: My To Do List</Text>
      <Text>My Name: Ahmad Baker</Text>
      <Text>Date: {new Date().toLocaleDateString()}</Text>
    </View>
    </MainLayout>
  );
};

export default AboutScreen;
