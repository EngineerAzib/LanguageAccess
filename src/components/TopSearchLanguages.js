import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const TopSearchLanguages = ({ items }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Top Search Languages</Text>
        <Text style={styles.explore}>Explore</Text>
      </View>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.imageName} style={styles.image} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 },
  title: { fontSize: 20, fontWeight: '600', color: '#003D5B' },
  explore: { color: '#1560bd' },
  item: { alignItems: 'center', marginHorizontal: 6 },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',
  },
  itemText: { marginTop: 5, fontSize: 12 },
});

export default TopSearchLanguages;
