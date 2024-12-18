import React, {useState} from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, FlatList,TouchableOpacity } from 'react-native';
import LocationHeader from '../components/LocationHeader';
import SearchBar from '../components/SearchBar';
import LanguageTabs from '../components/LanguageTabs';
import PromotionalCard from '../components/PromotionalCard';
import TopSearchLanguages from '../components/TopSearchLanguages';
import CircularImageList from '../components/CircularImageList';
import LanguageList from '../components/LanguageList';
import BackgroundCircle from '../components/BackgroundCircle';
import Svg, { Path, Circle } from 'react-native-svg';
import { MaterialIcons, FontAwesome, Ionicons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import Search from '../components/Search';
import SafeAreaComponent from '../components/SafeAreaComponent';
const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

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

const HomeScreen = ({route}) => {
  const [searchText, setSearchText] = useState('');
  const [filterTab, setFilterTab] = useState('All');
  const navigation = useNavigation();

   // Filter languages based on search input and active tab
const filteredLanguages = languages.filter(
  (language) =>
    language.name.toLowerCase().includes(searchText.toLowerCase()) &&
    (filterTab === 'All' || language.name === filterTab)
);

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  return (
    <SafeAreaComponent backgroundColor="#1560bd">
    <View style={styles.container}>
      {/* Background circle with heart/language symbol */}
     
<BackgroundCircle/>
      <LocationHeader  navigation={navigation} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subTitle}>Let's start exploring</Text>

        {/* Search Bar */}
        <Search searchText={searchText} onChangeText={setSearchText} />

        {/* Filter Chips */}
        <LanguageTabs filterTab={filterTab} setFilterTab={setFilterTab}  navigation={navigation}/>

        {/* Promotional Cards */}
       
  
  <PromotionalCard  items={[
    { title: 'Halloween Sale!', discount: 'Up to 60% Discount',  imagePath: require('../assets/countries/usa.jpeg') },
    { title: 'Summer Vacation', discount: 'Up to 60% Discount', imagePath: require('../assets/countries/turkey.jpeg') },
  ]}/>
 
  {/* contentContainerStyle={styles.promotionalCardsContainer} */}

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
        ]} 
        navigation={navigation}
        />

        {/* Explore Language List */}
        <View style={styles.header}>
        <Text style={styles.title}>Top Languages</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('LanguageScreen')}
        ><Text style={styles.explore}>Explore</Text></TouchableOpacity>
      </View>
        <LanguageList languages={filteredLanguages}  navigation={navigation} />
      </ScrollView>
      <View style={styles.navContainer}>
        <BottomTabNavigator
          activeScreen={route.name}
          onScreenChange={handleScreenChange}
        />
      </View>
    </View>
    </SafeAreaComponent>
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
    paddingBottom: '25%',
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
    
    marginBottom: 20,
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
  header: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 },
  title: { fontSize: 20, fontWeight: '600', color: '#003D5B' },
  explore: { color: '#1560bd' },
});

export default HomeScreen;