import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

/*Test static adding entries, no db only temporary append" */ 
/* https://my-json-server.typicode.com/Rhei24/React-Native-Practice/Banana */

const BananaList = () => {
  const [addedEntry, setaddedEntry] = useState('');
  const [storedEntry, setstoredEntry] = useState([]); //use storedEntry to convert to data, display later

  const entryInputHandler = (addedText) => {
    setaddedEntry(addedText);
  };

  const addEntryHandler = () => {
    setstoredEntry(currentEntry => [...storedEntry, 
      {id: Math.random().toString(), value: addedEntry}]);
  } // storedEntry = previous state

  return (
  <View>
    <View style={styles.container}>
      <TextInput
      placeholder="Entry" 
      style={styles.input}
      onChangeText={entryInputHandler}
      value={addedEntry} />
      <Button title ="ADD" onPress={addEntryHandler}/>
    </View>
    <FlatList
    keyExtractor={(item,index) => item.id}
    data={storedEntry} 
    renderItem={itemData => (
      <View style={styles.listItem}>
      <Text style = {{ fontSize: 20}}>{itemData.item.value}</Text>
      <Button style = {{padding: 10,width: '20%'}}title = "BUY"/> {/*no function atm*/}
    </View>
    )} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  input: {
      width: '80%',
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    borderColor: "black",
    borderWidth: 1,
  },
})

/* Form elements (in order):
      sellername
      harvestdate
      amountavailable (kilo)
      price (per kilo)
  popup window at button click "BUY" - 
    - amount (per kilo) or can be changed to grams, 
    - total price, scaling and updating with variable amount to be bought
*/

export default BananaList;