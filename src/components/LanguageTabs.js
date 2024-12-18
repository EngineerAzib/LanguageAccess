import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const LanguageTabs = ({ filterTab, setFilterTab }) => {
  const tabs = ['All', 'English', 'Chinese', 'Urdu'];

  return (
    <FlatList
      data={tabs}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.tabsContainer}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.tab, filterTab === item && styles.activeTabShadow]}
          onPress={() => setFilterTab(item)}
        >
          {filterTab === item ? (
            <LinearGradient
              colors={['#4A90E2', '#1560bd']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.activeTab}
            >
              <Text style={styles.activeTabText}>{item}</Text>
            </LinearGradient>
          ) : (
            <View style={styles.inactiveTab}>
              <Text style={styles.inactiveTabText}>{item}</Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    paddingVertical: 15,
    // paddingHorizontal: 10,
  },
  tab: {
    marginHorizontal: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  activeTab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  activeTabText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  inactiveTab: {
    backgroundColor: '#F2F4F7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3, // Shadow for Android
  },
  inactiveTabText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabShadow: {
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, // Shadow for active tab
  },
});

export default LanguageTabs;
