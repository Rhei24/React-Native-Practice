import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

const FruitsScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Text style = {styles.textheader}>List of Fruits</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Avocado')}
        >
          <Text style = {styles.textlink}>Avocado</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Banana')}
        >
          <Text style = {styles.textlink}>Banana</Text>
        </TouchableOpacity>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textheader: {
    fontSize: 25,
    fontWeight: "bold",
  },
  textlink: {
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
})
  

export default FruitsScreen;