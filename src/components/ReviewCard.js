import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ReviewCard = ({ reviewer, image, time, content }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.profileImage} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{reviewer}</Text>
          <Ionicons name="star" size={18} color="#FFD700" />
        </View>
        <Text style={styles.review}>{content}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    padding: 20, // Increased padding
    marginBottom: 20, // Added more spacing
    elevation: 2,
  },
  profileImage: {
    width: 60, // Larger image
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '700',
    fontSize: 18, // Larger text
  },
  review: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  time: {
    fontSize: 12,
    color: '#AAA',
    marginTop: 8,
  },
});

export default ReviewCard;
