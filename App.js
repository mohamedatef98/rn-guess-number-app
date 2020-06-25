import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
