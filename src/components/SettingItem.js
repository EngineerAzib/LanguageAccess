import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingItem = ({ title, hasToggle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.itemContainer} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
      {hasToggle ? (
        <Switch value={true} />
      ) : (
        <Ionicons name="chevron-forward" size={22} color="#888" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20, // Increased padding for bigger fields
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 18, // Larger font size
    fontWeight: '600', // Thicker font
    color: '#333',
    fontFamily: 'Roboto',
  },
});

export default SettingItem;
