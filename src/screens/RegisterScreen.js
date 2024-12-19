import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView,Image } from 'react-native';
import CustomTextField from '../components/CustomTextField';
import UserTypeToggle from '../components/UserTypeToggle'; 
import SafeAreaComponent from '../components/SafeAreaComponent';


const Registration = ({navigation}) => {
  const [userType, setUserType] = useState('Customer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    additionalInfo: '',
  });

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setFormData({ name: '', email: '', additionalInfo: '' });
  };

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    console.log('Submitted data:', formData);
  };

  return (
    
    <SafeAreaComponent backgroundColor="#1560bd">
    <ScrollView contentContainerStyle={styles.container}>
       <Image source={require('../assets/images/illustration.jpg')} style={styles.illustration} />
     
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>quis nostrud exercitation ullamco laboris nisi ut</Text>

     
      <CustomTextField
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
        hintText="Name"
        icon="user"
      />

      <CustomTextField
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
        hintText="Email"
        icon="mail"
        keyboardType="email-address"
      />

      {userType === 'Interpreter' ? (
        <CustomTextField
          value={formData.additionalInfo}
          onChangeText={(text) => handleInputChange('additionalInfo', text)}
          hintText="Interpreter License Number"
          icon="credit-card"
        />
      ) : (
        <CustomTextField
          value={formData.additionalInfo}
          onChangeText={(text) => handleInputChange('additionalInfo', text)}
          hintText="Preferred Language"
          icon="globe"
        />
      )}

      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>

      <UserTypeToggle userType={userType} onUserTypeChanged={handleUserTypeChange} />
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.registerText}>
          Already have an account? <Text style={styles.registerLink}>Login</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop:'10%',
  },
  illustration: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginVertical: 8,
  },
  registerButton: {
    backgroundColor: '#1560bd',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    color: '#666',
  },
  registerLink: {
    color: '#1560bd',
    fontWeight: 'bold',
  },
});

export default Registration;