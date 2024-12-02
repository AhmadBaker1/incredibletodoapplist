import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => (
    <View style={styles.footer}>
      <Text>© 2024 My To Do List App</Text>
    </View>
  );

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: '#eee',
    textAlign: 'center',
  },
});

export default MainLayout;
