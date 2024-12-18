import React from 'react';
import { ScrollView, StyleSheet, View, Text, Alert, Dimensions } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import SettingList from '../components/SettingList';
import { useNavigation } from '@react-navigation/native';
import BottomTabNavigator from '../navigation/BottomTabNavigator';


const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const ProfileScreen = ({route}) => {
    const navigation = useNavigation();

    const handleScreenChange = (screenName) => {
      navigation.navigate(screenName);
    };
  // Example dynamic user data (replace this with real data)
  const userData = {
    name: 'Joe Samanta',
    email: 'joesamanta@gmail.com',
    location: 'Daerah Istimewa Yogyakarta',
    profileImage: require('../assets/images/profile1.jpeg'), // Replace with a dynamic URI if needed
  };

  const handleEditPress = () => {
    Alert.alert('Edit Profile', 'Navigating to Edit Profile Screen.');
  };

  const handleItemPress = (item) => {
    Alert.alert(`${item}`, `You pressed ${item}!`);
  };

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <ProfileHeader user={userData} navigation={navigation} />

      {/* Settings Heading */}
      <Text style={styles.settingsHeading}>Settings</Text>

      {/* Settings Section */}
      <ScrollView contentContainerStyle={styles.settingsContainer}>
        <SettingList onItemPress={handleItemPress} />
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
    backgroundColor: '#F5F5F5',
  },
  settingsHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
  },
  settingsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
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

export default ProfileScreen;



//How to Replace Static Data with Real Data:
//  If you use a backend (Firebase, REST API):
//  Fetch user data upon login and save it in state (e.g., using React's useState or Redux).
//  Pass the fetched data to the ProfileHeader component.
//  Example with React State:
//
//  javascript
//  Copy code


//  const [user, setUser] = React.useState(null);
//
//  useEffect(() => {
//    fetchUserData(); // Fetch user data dynamically
//  }, []);
//
//  const fetchUserData = async () => {
//    const response = await fetch('https://your-api-endpoint/user');
//    const data = await response.json();
//    setUser(data);
//  };