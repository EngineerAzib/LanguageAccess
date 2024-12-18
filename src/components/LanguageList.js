import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LanguageList = ({ languages, navigation }) => {
  const getFlagUrl = (code) =>
    `https://flagcdn.com/w40/${code.toLowerCase()}.png`;

  return (
    <View style={styles.container}>
      {languages.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.languageItem}
          onPress={() => navigation.navigate('InterpreterScreen')}
        >
          <View style={styles.row}>
            <Image source={{ uri: getFlagUrl(item.code) }} style={styles.flag} />
            <Text style={styles.languageName}>{item.name}</Text>
          </View>
          <Icon name="chevron-forward" size={24} color="#4A90E2" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  languageItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F4F7',
    padding: 15,
    
    marginVertical: 5,
    borderRadius: 8,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  languageName: {
    fontSize: 16,
    color: '#333',
  },
});

export default LanguageList;
