// lib/widgets/BottomNavBar.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';

const BottomNavBar = () => {
  const [index, setIndex] = useState(0);

  const routes = [
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'messages', title: 'Messages', icon: 'message' },
    { key: 'bookings', title: 'Bookings', icon: 'book' },
    { key: 'profile', title: 'Profile', icon: 'account' },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    messages: MessagesScreen,
    bookings: BookingsScreen,
    profile: ProfileScreen,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.barStyle}
    />
  );
};

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: 'white',
  },
});

export default BottomNavBar;
