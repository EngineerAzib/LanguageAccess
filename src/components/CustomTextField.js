import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width } = Dimensions.get('window');

const CustomTextField = ({ value, onChangeText, hintText, icon, isPassword = false }) => {
  const [obscureText, setObscureText] = useState(isPassword);

  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} color="#666" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder={hintText}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={obscureText}
        selectionColor="#007AFF"
      />
      {isPassword && (
        <TouchableOpacity onPress={() => setObscureText(!obscureText)}>
          <Icon name={obscureText ? 'eye-off' : 'eye'} size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F8',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
    width: width - 48,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  icon: {
    marginRight: 12,
  },
});

export default CustomTextField;