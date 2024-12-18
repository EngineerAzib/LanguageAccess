import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const TopSearchLanguages = ({ items }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Top Search Languages</Text>
        <Text style={styles.explore}>Explore</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {items.map((item, index) => (
          <View key={index} style={styles.item}>
            {/* Corrected the image source */}
            <Image source={item.imageName} style={styles.image} />
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between',marginVertical:15,},
  title: { fontSize: 20, fontWeight: '600', color: '#003D5B',},
  explore: { color: 'blue' },
  scrollContainer: { paddingVertical: 10 },
  item: { alignItems: 'center', marginHorizontal: 6 },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    resizeMode: 'cover',  // Ensure images are displayed properly
  },
  itemText: { marginTop: 5, fontSize: 12 },
});

export default TopSearchLanguages;
