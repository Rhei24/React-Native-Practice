// console.disableYellowBox = ["Unable to symbolicate"]; 
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FruitsScreen from './screens/FruitsScreen';
import BananaList from './screens/BananaList';
import AvocadoList from './screens/AvocadoList';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style = {styles.textheader}>this is HomeScreen</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Fruits')}
      >
        <Text style = {styles.textlink}>Fruits</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProfileDetail')}
      >
        <Text>contain details w/onpress links</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileScreenDetail() {
  return (
    <View>
      <Text>Profile Detail</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Fruits" component={FruitsScreen} />
      <Stack.Screen name="Avocado" component={AvocadoList} />
      <Stack.Screen name="Banana" component={BananaList} />
    </Stack.Navigator>
  )
}

function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetail" component={ProfileScreenDetail} />
    </Stack.Navigator>
  )
}

 function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
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

export default App;

