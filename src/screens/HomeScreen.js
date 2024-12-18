import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import LocationHeader from '../components/LocationHeader';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import PromotionalCard from '../components/PromotionalCard';
import TopSearchLanguages from '../components/TopSearchLanguages';
import CircularImageList from '../components/CircularImageList';
import LanguageList from '../components/LanguageList';
import BackgroundCircle from '../components/BackgroundCircle';
import Svg, { Path, Circle } from 'react-native-svg';
import { MaterialIcons, FontAwesome, Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';

const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const HomeScreen = ({route}) => {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <View style={styles.container}>
      {/* Background circle with heart/language symbol */}
     
<BackgroundCircle/>
      <LocationHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subTitle}>Let's start exploring</Text>

        {/* Search Bar */}
        <SearchBar />

        {/* Filter Chips */}
        <FilterChips filters={["All", "English", "Chinese", "Urdu"]} />

        {/* Promotional Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.promotionalCardsContainer}
        >
          <PromotionalCard
            title="Halloween Sale!"
            imagePath={require('../assets/countries/usa.jpeg')}
          />
          <PromotionalCard
            title="Summer Vacation"
            imagePath={require('../assets/countries/turkey.jpeg')}
          />
        </ScrollView>
        {/* Top Search Languages */}
        <TopSearchLanguages items={[
          { title: "Chinese", imageName: require('../assets/countries/china.jpeg') },
          { title: "English", imageName: require('../assets/countries/usa.jpeg') },
          { title: "Chinese", imageName: require('../assets/countries/china.jpeg') },
          { title: "English", imageName: require('../assets/countries/usa.jpeg') },
          { title: "Chinese", imageName: require('../assets/countries/china.jpeg') },
          { title: "English", imageName: require('../assets/countries/usa.jpeg') },
          { title: "Chinese", imageName: require('../assets/countries/china.jpeg') },
          { title: "English", imageName: require('../assets/countries/usa.jpeg') },
        ]} />

        {/* Top Interpreter Agents */}
        <Text style={styles.sectionTitle}>Top Interpreter Agent</Text>
        <CircularImageList items={[
          { imageUri: require('../assets/images/p2.jpeg'), label: "Agent 1" },
          { imageUri: require('../assets/images/p3.jpeg'), label: "Agent 2" },
          { imageUri: require('../assets/images/profile.jpeg'), label: "Agent 3" },
          { imageUri: require('../assets/images/p2.jpeg'), label: "Agent 1" },
          { imageUri: require('../assets/images/p3.jpeg'), label: "Agent 2" },
          { imageUri: require('../assets/images/profile.jpeg'), label: "Agent 3" },
        ]} />

        {/* Explore Language List */}
        <LanguageList items={[
          { title: "China", imageName: require('../assets/countries/china.jpeg') },
          { title: "USA", imageName: require('../assets/countries/usa.jpeg') },
        ]}/>
      </ScrollView>
      <View style={styles.navContainer}>
        <BottomTabNavigator
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    position: 'relative', // Added to position the background circle
  },
  content: {
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 35,
    fontWeight: '450',
    lineHeight: 40,
    color: '#003D5B',
    marginTop: 20,
    fontFamily: 'Lato',
  },
  subTitle: {
    fontSize: 30,
    fontWeight: '450',
    fontFamily: 'Lato',
    color: '#003D5B',
    marginBottom: 35,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#003D5B',
    marginVertical: 20,
  },
  promotionalCardsContainer: {
    paddingVertical: 12,
  },
  backgroundCircle: {
    position: 'absolute',
    top: -50,
    left: -70,
    width: 350,
    height: 350,
    borderRadius: 190,
    backgroundColor: 'rgba(35, 79, 104, 0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: scale(65),
  },
});

export default HomeScreen;