// lib/widgets/FilterChips.js

import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';

const FilterChips = ({ filters }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {filters.map((filter, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.chip, selectedIndex === index && styles.selectedChip]}
          onPress={() => setSelectedIndex(index)}
        >
          <Text style={[styles.chipText, selectedIndex === index && styles.selectedText]}>{filter}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  chip: { padding: 10, borderRadius: 20, backgroundColor: '#F3F4F6', marginHorizontal: 5 },
  selectedChip: { backgroundColor: '#2A5160' },
  chipText: { color: '#4A4A4A' },
  selectedText: { color: '#FFF' },
});

export default FilterChips;
