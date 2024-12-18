import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SafeAreaComponent from '../components/SafeAreaComponent';
import InterpreterHeader from '../components/InterpreterHeader';
import InterpreterList from '../components/InterpreterList';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const InterpreterScreen = ({route}) => {
  const navigation = useNavigation();
  const interpreters = [
    {
      id: '1',
      name: 'Emmett Perry',
      rating: '4.9',
      status: 'Active',
      image: 'https://i.pravatar.cc/300?img=1',
    },
    {
      id: '2',
      name: 'Sophia Lee',
      rating: '4.8',
      status: 'Active',
      image: 'https://i.pravatar.cc/300?img=2',
    },
    {
      id: '3',
      name: 'John Smith',
      rating: '4.7',
      status: 'Active',
      image: 'https://i.pravatar.cc/300?img=3',
    },
  ];

  return (
    <SafeAreaComponent backgroundColor="#1560bd">
      {/* Header */}
      <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>English Interpreter</Text>
        {/* Interpreter List */}
        <InterpreterList interpreters={interpreters} />
      </View>
      
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#003D5B',
    marginVertical: 20,
  },
});

export default InterpreterScreen;
