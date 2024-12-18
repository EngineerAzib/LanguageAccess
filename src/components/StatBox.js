import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StatBox = ({ value, label, showStars = false, isHighlighted = false }) => {
  return (
    <View
      style={[
        styles.container,
        isHighlighted && styles.highlightedContainer,
      ]}
    >
      <Text style={styles.value}>{value}</Text>
      {showStars && (
        <View style={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Ionicons
              key={i}
              name="star"
              size={18}
              color="#FFD700" // Gold color for stars
            />
          ))}
        </View>
      )}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  highlightedContainer: {
    backgroundColor: '#F5F8FA', // Light gray background
    borderColor: '#F5F8FA',
  },
  value: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E3A59', // Dark blue text
    marginBottom: 5,
  },
  stars: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
});

export default StatBox;
