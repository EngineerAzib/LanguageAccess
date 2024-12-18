import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CallInfo = ({ interpreterName, interpreterImage, callDuration, formatDuration }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{interpreterName}</Text>
      <Text style={styles.timer}>{formatDuration(callDuration)}</Text>
      <Image source={{ uri: interpreterImage }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  timer: {
    fontSize: 16,
    color: '#888',
    marginVertical: 8,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginVertical: 20,
    backgroundColor: '#F0F0F0',
  },
});

export default CallInfo;
