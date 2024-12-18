import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RatingFilter = ({ filters, selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {filters.map((filter) => (
        <TouchableOpacity
          key={filter.value}
          style={[
            styles.button,
            selected === filter.value && styles.selectedButton,
          ]}
          onPress={() => onSelect(filter.value)}
        >
          <Text
            style={[
              styles.text,
              selected === filter.value && styles.selectedText,
            ]}
          >
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30, // Increased spacing
  },
  button: {
    paddingVertical: 12, // Taller buttons
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 10,
  },
  selectedButton: {
    backgroundColor: '#2E5B72',
  },
  text: {
    fontSize: 16, // Larger text
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
});

export default RatingFilter;
