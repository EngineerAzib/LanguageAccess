import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const scale = (size) => (width / 375) * size;

const BottomTabNavigator = ({ activeScreen, onScreenChange }) => {
  const routes = [
    { name: 'HomeScreen', displayName: 'Home', icon: 'home' },
    { name: 'ProfileScreen', displayName: 'Profile', icon: 'person' },
    { name: 'LanguageScreen', displayName: 'Languages', icon: 'globe-outline' },
    { name: 'LoginScreen', displayName: 'Logout', icon: 'log-out' },
  ];

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.9)', 'rgba(245, 245, 245, 0.9)']}
        style={styles.container}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {routes.map((route, index) => {
          const isFocused = activeScreen === route.name;

          return (
            <TouchableOpacity
              key={index}
              style={styles.tab}
              onPress={() => onScreenChange(route.name)}
            >
              <View
                style={[
                  styles.iconWrapper,
                  isFocused && styles.activeIconWrapper,
                ]}
              >
                <Ionicons
                  name={route.icon}
                  size={scale(24)}
                  color={isFocused ? '#FFFFFF' : '#000000'}
                />
              </View>
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {route.displayName}
              </Text>
              {isFocused && <View style={styles.activeUnderline} />}
            </TouchableOpacity>
          );
        })}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -4 }, // Shadow towards top
    shadowOpacity: 0.2,
    shadowRadius: scale(8),
    elevation: 10, // Shadow effect for Android
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    overflow: 'hidden',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: scale(80),
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    overflow: 'hidden',
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative',
  },
  iconWrapper: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(25),
    backgroundColor: '#ebebeb', // Light transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIconWrapper: {
    backgroundColor: '#1560bd', // Green background for active icon
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: scale(4),
    elevation: 5,
  },
  label: {
    fontSize: scale(10),
    color: '#000000',
    marginTop: scale(5),
  },
  activeLabel: {
    fontWeight: 'bold',
    color: '#1560bd',
  },
  activeUnderline: {
    position: 'absolute',
    bottom: -2,
    height: 2,
    width: '50%',
    backgroundColor: '#1560bd',
  },
});

export default BottomTabNavigator;