import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ProfileInfoCard from './ProfileInfoCard';

const ProfileContent = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.sectionTitle}>Personal Information</Text>
      {/* Personal Information Cards */}
      <ProfileInfoCard title="Username" value="John Doe" />
      <ProfileInfoCard title="Phone" value="+1 234 567 890" />
      <ProfileInfoCard title="Address" value="123 Street, New York, USA" />
      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003D5B',
    marginBottom: 15,
  },
  editButton: {
    backgroundColor: '#28A745',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileContent;
