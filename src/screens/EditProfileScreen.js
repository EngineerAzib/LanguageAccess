import React from 'react';
import { View, StyleSheet, ScrollView, Text, Dimensions } from 'react-native';
import ProfileImage from '../components/ProfileImage';
import InputField from '../components/InputField';
import LinkButton from '../components/LinkButton';
import SafeAreaComponent from '../components/SafeAreaComponent';
import Header from '../components/Header';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window'); // Get screen width for scaling
const scale = (size) => (width / 375) * size; // Scaling utility for responsive design

const EditProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const handleScreenChange = (screenName) => {
    navigation.navigate(screenName);
  };
  // Example user data (replace with dynamic data)
  const user = {
    name: 'Mathew Adam',
    phone: '+62 112-3288-9111',
    email: 'Mathew@email.com',
    profileImage: require('../assets/images/profile1.jpeg'),
  };

  return (
    <SafeAreaComponent backgroundColor="#1560bd">
      <Header 
            title={route.name}
            onBackPress={() => navigation.goBack()}
          />
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      

      {/* Profile Image */}
      <ProfileImage imageSource={user.profileImage} />

      {/* Input Fields */}
      <InputField placeholder="Full Name" icon="person" value={user.name} editable={true} />
      <InputField placeholder="Phone Number" icon="call" value={user.phone} editable={true} />
      <InputField placeholder="Email" icon="mail" value={user.email} editable={true} />

      {/* Link/Unlink Buttons */}
      {/* <View style={styles.buttonContainer}>
        <LinkButton text="Unlink" icon="logo-google" color="#2E5B72" onPress={() => {}} />
        <LinkButton text="Link" icon="logo-facebook" color="#E0E0E0" onPress={() => {}} />
      </View> */}

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
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40, // Extra bottom padding
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 22, // Larger title
    fontWeight: '700',
    color: '#333',
    marginBottom: 50,
    marginTop: 20// Spacing below title
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20, // Spacing above buttons
  },
});

export default EditProfileScreen;
