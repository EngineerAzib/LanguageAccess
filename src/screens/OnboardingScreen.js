import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Skip Button */}
      <TouchableOpacity
        style={styles.skipContainer}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.skipText}>skip</Text>
      </TouchableOpacity>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.title}>Find best place</Text>
        <Text style={[styles.title, styles.highlight]}>to translate language</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </Text>
      </View>

      {/* Image Background with Rounded Corners */}
      <ImageBackground
        source={require('../assets/images/onboarding_image.jpg')}
        style={styles.imageContainer}
        imageStyle={styles.imageStyle}
      >
        {/* Next Button */}
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  skipContainer: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#EDEDED',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    zIndex: 1,
  },
  skipText: {
    color: '#666',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 90,
    paddingBottom: 24,
    marginTop:24,
    
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: '400',
    color: '#000',
    lineHeight: 40,
  },
  highlight: {
    color: '#1560bd',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginTop: 12,
    lineHeight: 24,
  },
  imageContainer: {
    flex: 1,
    // borderTopLeftRadius: 45,
    // borderTopRightRadius: 45,
    borderRadius:45,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    marginHorizontal:8,

    
   
  },
  imageStyle: {
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    width: '100%',
    height: '100%',
  },
  nextButton: {
    backgroundColor: '#1560bd',
    borderRadius: 30,
    alignSelf: 'center',
    paddingVertical: 14,
    paddingHorizontal: 40,
    marginBottom: 40,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OnboardingScreen;