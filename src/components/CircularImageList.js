// CircularImageList.js

import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const CircularImageList = ({ items }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
      <View style={styles.row}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <View style={styles.profileImageContainer}>
            <Image source={item.imageUri} style={styles.avatar} />
            </View>
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    padding:10,
  },
  profileImageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    alignItems: 'center',
    padding:3,

  },
  itemText: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default CircularImageList;
