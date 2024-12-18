import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CallControls = ({ onEndCall }) => {
  return (
    <View style={styles.controls}>
      {/* Mute Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="mic-off" size={24} color="#333" />
      </TouchableOpacity>

      {/* End Call Button */}
      <TouchableOpacity style={styles.endCallButton} onPress={onEndCall}>
        <Text style={styles.endCallText}>End Call</Text>
      </TouchableOpacity>

      {/* Video Toggle Button */}
      <TouchableOpacity style={styles.iconButton}>
        <Icon name="eye-outline" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: '#EEE',
  },
  iconButton: {
    backgroundColor: '#EDEDED',
    padding: 15,
    borderRadius: 30,
  },
  endCallButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 30,
  },
  endCallText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CallControls;
