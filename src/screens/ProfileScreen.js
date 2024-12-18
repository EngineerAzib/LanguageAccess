import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import LocationHeader from '../components/LocationHeader';
import SearchBar from '../components/SearchBar';
import FilterChips from '../components/FilterChips';
import PromotionalCard from '../components/PromotionalCard';
import TopSearchLanguages from '../components/TopSearchLanguages';
import CircularImageList from '../components/CircularImageList';
import LanguageList from '../components/LanguageList';
import Svg, { Path, Circle } from 'react-native-svg';
import { MaterialIcons, FontAwesome, Ionicons } from 'react-native-vector-icons';

const China = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <Circle cx="12" cy="12" r="10" />
    <Path d="M4 10h16M4 14h16" />
    <Path d="M6 7l2 2-2 2M6 15l2 2-2 2" />
  </Svg>
);




const India = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <Circle cx="12" cy="12" r="10" />
    <Path d="M12 2v20" />
    <Path d="M2 12h20" />
    <Path d="M9 9l6 6M9 15l6-6" />
  </Svg>
);

const Italy = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <Circle cx="12" cy="12" r="10" />
    <Path d="M4 4h16v16H4z" />
    <Path d="M8 4v16M16 4v16" />
  </Svg>
);

const Germany = ({ color, size }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <Circle cx="12" cy="12" r="10" />
    <Path d="M4 8h16M4 16h16" />
    <Path d="M8 4v16" />
  </Svg>
);

const ProfileScreen = () => {
  const languageIcons = [
    (color, size) => <China color={color} size={size} />,
   
    (color, size) => <India color={color} size={size} />,
    (color, size) => <Italy color={color} size={size} />,
    (color, size) => <Germany color={color} size={size} />,
    (color, size) => <MaterialIcons name="translate" color={color} size={size} />, // Translation Icon
    (color, size) => <FontAwesome name="globe" color={color} size={size} />,      // Globe Icon
    (color, size) => <MaterialIcons name="chat" color={color} size={size} />,     // Chat Icon
    (color, size) => <Ionicons name="chatbubbles" color={color} size={size} />,   // Chat Bubbles Icon
    (color, size) => <MaterialIcons name="g-translate" color={color} size={size} />, // G-Translate Icon
    (color, size) => <FontAwesome name="language" color={color} size={size} />,
   
    
  ];
  const colors = ['#FFf', '#FFf'];
  const iconSize = 26;

// Function to generate positions with a minimum distance constraint
const generateRandomPositions = (count, offset, minDistance) => {
  const positions = [];

  // Helper function to check if a new position is far enough from existing positions
  const isFarEnough = (newX, newY) => {
    return positions.every(
      ({ x, y }) => Math.hypot(newX - x, newY - y) >= minDistance
    );
  };

  // Generate positions until the desired count is reached
  while (positions.length < count) {
    const x = Math.random() * offset * 2 - offset; // Random x in [-offset, offset]
    const y = Math.sqrt(offset ** 2 - x ** 2) * (Math.random() > 0.5 ? 1 : -1); // Random y on the circle boundary

    // Add position only if it satisfies the minimum distance constraint
    if (isFarEnough(x, y)) {
      positions.push({ x, y });
    }
  }

  return positions;
};

// Main function to generate icon data
const generateRandomIcons = () => {
  const count = 10; // Total number of icons
  const offset = 125; // Circle boundary radius
  const minDistance = 50; // Minimum distance between icons

  // Generate positions with constraints
  const positions = generateRandomPositions(count, offset, minDistance);

  // Map positions to icons with random colors
  return positions.map(({ x, y }) => {
    const randomIconIndex = Math.floor(Math.random() * languageIcons.length);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return {
      IconComponent: languageIcons[randomIconIndex],
      color: randomColor,
      x,
      y,
    };
  });
};

// Call the function to get the icon data
const iconData = generateRandomIcons();

  return (
    <View style={styles.container}>
      {/* Background circle with heart/language symbol */}
      <View style={styles.backgroundCircle}>
      {iconData.map((data, index) => {
          const { IconComponent, color, x, y } = data;
          return (
            <View
              key={index}
              style={{
                position: 'absolute',
                transform: [{ translateX: x }, { translateY: y }],
              }}
            >
              {IconComponent(color, iconSize)}
            </View>
          );
        })}
      </View>

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

});

export default ProfileScreen;