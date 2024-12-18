import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import InterpreterCard from './InterpreterCard';

const InterpreterList = ({ interpreters }) => {
  return (
    <FlatList
      data={interpreters}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <InterpreterCard interpreter={item} />}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 10,
  },
});

export default InterpreterList;
