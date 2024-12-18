import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LocationHeader = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationTag}>
        <Text style={styles.locationText}>Jakarta, Indonesia</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View style={styles.notificationIconContainer}>
          <Icon name="notifications-none" size={25} color="#000" style={styles.notificationIcon} />
          <View style={styles.notificationDot} />
        </View>
        <TouchableOpacity
        
         
          onPress={() => navigation.navigate('ProfileScreen')}
        >
        <View style={styles.profileImageContainer}>
          <Image source={require('../assets/images/profile.jpeg')} style={styles.profileImage} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  locationTag: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
  },
  locationText: {
    fontSize: 16,
    color: '#003D5B',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  notificationIconContainer: {
    borderColor:'#1560bd',
    borderWidth:1.5,
    borderRadius: 25,
    alignItems: 'center',
justifyContent: 'center',
    marginRight: 12,
    width: 50,
    height: 50,
    
  },
  notificationIcon: {
    color: '#000',
  
    
  },
  notificationDot: {
    position: 'absolute',
    top: 15,
    right: 14,
    width: 9,
    height: 9,
    backgroundColor: '#FF0000',
    borderRadius: 4,
    borderColor: '#ffff',
    borderWidth:1,
  },
  profileImageContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    alignItems: 'center',

  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
   
  },
});

export default LocationHeader;