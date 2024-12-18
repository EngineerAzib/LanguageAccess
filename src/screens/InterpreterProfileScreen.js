import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import ProfileInterpreter from '../components/ProfileInterpreter';
import StatBox from '../components/StatBox';
import ReviewCard from '../components/ReviewCard';
import RatingFilter from '../components/RatingFilter';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import SafeAreaComponent from '../components/SafeAreaComponent';
import Header from '../components/Header';


const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const InterpreterProfileScreen = ({route}) => {

  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  const [selectedFilter, setSelectedFilter] = useState('All');

  const user = {
    name: 'Amanda',
    email: 'amanda.trust@email.com',
    image: require('../assets/images/profile1.jpeg'),
  };

  const reviews = [
    {
      reviewer: 'Kurt Mullins',
      image: require('../assets/images/profile1.jpeg'),
      content: 'Lorem ipsum dolor sit amet...',
      time: '10 mins ago',
    },
    {
      reviewer: 'Samuel Ella',
      image: require('../assets/images/profile1.jpeg'),
      content: 'Lorem ipsum dolor sit amet...',
      time: '10 mins ago',
    },
    {
      reviewer: 'Kay Swanson',
      image: require('../assets/images/profile1.jpeg'),
      content: 'Sed ut perspiciatis unde omnis iste natus...',
      time: '15 mins ago',
    },
  ];

  return (
    <SafeAreaComponent backgroundColor="#1560bd">
      <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      

      {/* Profile Header */}
      <ProfileInterpreter name={user.name} email={user.email} image={user.image} />

      {/* Stat Boxes */}
      <View style={styles.statsContainer}>
        <StatBox value="5.0" label="" showStars={true} isHighlighted={true} />
        <StatBox value="235" label="Reviews" />
        <StatBox value="112" label="Sold" />
      </View>

      {/* Rating Filters */}
      <RatingFilter
        filters={[
          { label: '⭐ All', value: 'All' },
          { label: '⭐ 1', value: '1' },
          { label: '⭐ 2', value: '2' },
          { label: '⭐ 3', value: '3' },
        ]}
        selected={selectedFilter}
        onSelect={setSelectedFilter}
      />

      {/* User Reviews */}
      <Text style={styles.sectionTitle}>User reviews</Text>
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          reviewer={review.reviewer}
          image={review.image}
          content={review.content}
          time={review.time}
        />
      ))}
    </ScrollView>
     <View style={styles.navContainer}>
     <BottomTabNavigator
       activeScreen={route.name}
       onScreenChange={handleScreenChange}
     />
   </View>
   </SafeAreaComponent>
  );

};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 30// Spacing for better alignment
  },
  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2E3A59', // Dark blue color
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333',
    marginVertical: 20,
  },
});

export default InterpreterProfileScreen;
