import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PromotionalCard = ({ items, onPress }) => {
  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContainer}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={onPress} style={styles.container}>
          <ImageBackground
            source={item.imagePath}
            style={styles.image}
            imageStyle={styles.imageBorder}
          >
            <View style={styles.contentContainer}>
              {/* Text Section */}
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.discount}>{item.discount}</Text>
              </View>

              {/* Arrow Section */}
              <View style={styles.arrowContainer}>
                <Feather name="arrow-right" size={20} color="#FFFFFF" />
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatListContainer: {
    paddingVertical: 10,
  },
  container: {
    width: 320,
    height: 200,
    borderRadius: 35,
    borderBottomLeftRadius:0,
    overflow: 'hidden',
    // marginHorizontal: 8,
marginRight:15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  image: {
    flex: 1,
  },
  imageBorder: {
    borderRadius: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional dark overlay for contrast
  },
  textContainer: {
    justifyContent: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 5,
  },
  discount: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  arrowContainer: {
    top:20,
    right:20,
    width: 100,
    height: 70,
    backgroundColor: '#003D5B',
   
    borderTopRightRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start', // Align left
  },
});

export default PromotionalCard;
