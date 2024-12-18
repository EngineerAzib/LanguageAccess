import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SafeAreaComponent from '../components/SafeAreaComponent';
import Header from '../components/Header'; // Header Component
import Search from '../components/Search'; // SearchBar Component
import LanguageTabs from '../components/LanguageTabs'; // Tabs Component
import LanguageList from '../components/LanguageList'; // LanguageList Component
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
const languages = [
  { id: '1', name: 'Arabic', code: 'SA' },
  { id: '2', name: 'Indonesian', code: 'ID' },
  { id: '3', name: 'Malaysian', code: 'MY' },
  { id: '4', name: 'English', code: 'GB' },
  { id: '5', name: 'German', code: 'DE' },
  { id: '6', name: 'Hindi', code: 'IN' },
  { id: '7', name: 'Italian', code: 'IT' },
  { id: '8', name: 'Japanese', code: 'JP' },
  { id: '9', name: 'French', code: 'FR' },
];
const LanguageScreen = ({route }) => {
  const [searchText, setSearchText] = useState('');
  const [filterTab, setFilterTab] = useState('All');

  const navigation = useNavigation();
  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  // Filter languages based on search input and active tab
  const filteredLanguages = languages.filter(
    (language) =>
      language.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterTab === 'All' || language.name === filterTab)
  );

  return (
    <SafeAreaComponent backgroundColor="#1560bd">
      {/* Header */}
      <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />
      <ScrollView contentContainerStyle={styles.content}>
      {/* Search Bar */}
      <Search searchText={searchText} onChangeText={setSearchText} />

      {/* Tabs */}
      <LanguageTabs filterTab={filterTab} setFilterTab={setFilterTab}  />


      {/* Language List */}
      <LanguageList
        languages={filteredLanguages}
        navigation={navigation}
      />
       </ScrollView>
       <View style={styles.navContainer}>
        <BottomTabNavigator
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </SafeAreaComponent>
  );
};


const styles = StyleSheet.create({
 
  content: {
    paddingHorizontal: 20,
    paddingBottom: '25%',
  },});
export default LanguageScreen;
