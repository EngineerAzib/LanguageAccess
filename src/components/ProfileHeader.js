import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileHeader = ({ user, onEditPress, navigation }) => {
  return (
    <View style={styles.header}>
      {/* Background Image */}
      <Image
        source={require('../assets/images/download12.jpg')}
        style={styles.backgroundImage}
      />

      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfileScreen')} >
        <Ionicons name="pencil" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Profile Section */}
      <View style={styles.contentContainer}>
        {/* Profile Image */}
        <Image
          source={user.profileImage} // Dynamically load image
          style={styles.profileImage}
        />
        {/* Info (Name, Email, Location) */}
        <View style={styles.infoContainer}>
          <Text style={styles.nameText}>{user.name}</Text>
          <View style={styles.row}>
            <Ionicons name="mail" size={18} color="#fff" />
            <Text style={styles.infoText}>{user.email}</Text>
          </View>
          <View style={styles.row}>
            <Ionicons name="location" size={18} color="#fff" />
            <Text style={styles.infoText}>{user.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '30%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  editButton: {
    position: 'absolute',
    top: '15%',
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 8,
    borderRadius: 20,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: '25%',
    marginLeft: 20,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#fff',
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 5,
  },
});

export default ProfileHeader;
