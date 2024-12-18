import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const InputField = ({ placeholder, icon, value, editable }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        value={value}
        editable={editable}
      />
      <Ionicons name={icon} size={24} color="#888" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    paddingHorizontal: 20,
    marginBottom: 20, // Increased spacing between fields
    elevation: 2,
    height: 65, // Increased field height
  },
  input: {
    flex: 1,
    fontSize: 18, // Bigger text
    color: '#333',
  },
  icon: {
    marginLeft: 10,
  },
});

export default InputField;
