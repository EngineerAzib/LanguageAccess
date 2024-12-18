import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const LanguageList = ({ items }) => {
  const renderLanguageItem = ({ item }) => (
    <View style={styles.languageItem}>
      <Image source={item.imageName} style={styles.avatar} />
      <Text style={styles.languageText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={items}  // Corrected data reference
      renderItem={renderLanguageItem}  // Use the correct render function
      keyExtractor={(item, index) => index.toString()}  // Use index for keyExtractor
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  languageText: {
    fontSize: 16,
  },
});

export default LanguageList;
