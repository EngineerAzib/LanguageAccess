import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const InterpreterCard = ({ interpreter }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <Image source={{ uri: interpreter.image }} style={styles.profileImage} />
      <View style={styles.cardContent}>
        <Text style={styles.name}>{interpreter.name}</Text>
        <View style={styles.infoRow}>
          <Icon name="star" size={16} color="#FFD700" />
          <Text style={styles.rating}>{interpreter.rating}</Text>
        </View>
        <Text style={styles.status}>{interpreter.status}</Text>
      </View>
      {/* Call Button */}
      <TouchableOpacity
        style={styles.callButton}
        onPress={() =>
          navigation.navigate('CallScreen', {
            interpreterName: interpreter.name,
            interpreterImage: interpreter.image,
          })
        }
      >
        <Icon name="call-outline" size={24} color="#1560bd" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    borderRadius: 20,
    padding: 15,
    marginVertical: 8,
    
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cardContent: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  rating: {
    fontSize: 14,
    marginLeft: 5,
    color: '#333',
  },
  status: {
    fontSize: 12,
    color: '#4CAF50',
  },
  callButton: {
    backgroundColor: '#E6F7FF',
    padding: 8,
    borderRadius: 20,
  },
});

export default InterpreterCard;
