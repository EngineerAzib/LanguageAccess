import React from 'react';
import { View, StyleSheet } from 'react-native';
import SettingItem from './SettingItem';

const SettingList = ({ onItemPress }) => {
  return (
    <View style={styles.container}>
      <SettingItem title="Notification" hasToggle onPress={() => onItemPress('Notification')} />
      <SettingItem title="Account" onPress={() => onItemPress('Account')} />
      <SettingItem title="Security" onPress={() => onItemPress('Security')} />
      <SettingItem title="Help" onPress={() => onItemPress('Help')} />
      <SettingItem title="About" onPress={() => onItemPress('About')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    elevation: 3, // Slight shadow for clean look
    overflow: 'hidden',
  },
});

export default SettingList;
