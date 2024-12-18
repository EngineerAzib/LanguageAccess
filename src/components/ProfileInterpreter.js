import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileInterpreter = ({ name, email, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 10,
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
});

export default ProfileInterpreter;
