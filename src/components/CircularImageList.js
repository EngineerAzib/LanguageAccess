import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const CircularImageList = ({ items, navigation }) => {
  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('InterpreterProfileScreen')}>
            <View style={styles.profileImageContainer}>
              <Image source={item.imageUri} style={styles.avatar} />
            </View>
          </TouchableOpacity>
          <Text style={styles.itemText}>{item.label}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: { paddingVertical: 10 },
  itemContainer: { alignItems: 'center', marginHorizontal: 8 },
  profileImageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 30,
    alignItems: 'center',
    padding: 3,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  itemText: {
    marginTop: 4,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});

export default CircularImageList;
