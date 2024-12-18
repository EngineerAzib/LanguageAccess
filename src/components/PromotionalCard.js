import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const PromotionalCard = ({ title, imagePath, discount, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground source={imagePath} style={styles.image} imageStyle={styles.imageBorder}>
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.discount}>{discount}</Text>
          </View>
          <TouchableOpacity style={styles.arrowButton}>
            <Feather name="arrow-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginHorizontal: 8,
    elevation: 4, // Adds shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 }, // iOS shadow
  },
  image: {
    flex: 1,
  },
  imageBorder: {
    borderRadius: 20,
  },
  overlay: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    borderBottomLeftRadius: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  discount: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  arrowButton: {
    backgroundColor: '#003D5B',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PromotionalCard;
