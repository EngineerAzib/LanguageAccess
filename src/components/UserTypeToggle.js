// components/UserTypeToggle.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const UserTypeToggle = ({ userType, onUserTypeChanged }) => {
  const buildToggleOption = (type) => {
    const isSelected = type === userType;

    return (
      <TouchableOpacity
        key={type}
        onPress={() => onUserTypeChanged(type)}
        style={[
          styles.optionContainer,
          {
            backgroundColor: isSelected ? '#FFFFFF' : '#F3F4F8',
            borderColor: isSelected ? '#28A745' : 'transparent',
          },
        ]}
      >
        <Text style={[styles.optionText, { color: isSelected ? '#28A745' : '#707070' }]}>
          {type}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {buildToggleOption('Customer')}
      {buildToggleOption('Interpreter')}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  optionContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
    borderRadius: 20,
    borderWidth: 1.5,
    
  },
  optionText: {
    fontWeight: 'bold',
  },
});

export default UserTypeToggle;
