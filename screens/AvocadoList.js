import * as React from 'react'; 
import { useState, useEffect } from 'react';
import {Text, View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
// import axios from 'axios';

// const examDBURL = "http://takehomeexambe.test:8000/api/fruits"
const AvocadoURL = "https://my-json-server.typicode.com/Rhei24/React-Native-Practice/Avocado"; //fake db-api
const AvocadoList = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(AvocadoURL).then((response) => response.json()).then((json) => setData(json.Avocado))
    // console.log(data);
    .catch((error) => alert(error))
    .finally(setLoading(false)); 
  }); // take response, then convert to json format, then setdata with json.Avocado
      // if unable to do response & setdata, return as ERROR
      // else, setloading:false
  return (
    <View style={StyleSheet.container}>
      {isLoading ? (
      <ActivityIndicator/>
    ) : ( // else
    <FlatList 
    data={data}
    keyExtractor={({id}, index) => id}
    renderItem={({item}) => {
      return (
        <Text>{item.id}, {item.sellername},{item.harvestdate},{item.amountavailable},{item.price}</Text>
      );
    }} 
    />
    )}
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AvocadoList;



/*experimental: using axios in taking table*/
/*
 const examdbURL = 'http://takehomeexambe.test:8000/api/fruits';
const AvocadoList = () => {
  /*axios.get('https://my-json-server.typicode.com/Rhei24/React-Native-Practice/avocado').then(({data}) => {
    console.log(data); //check http://localhost:8081/debugger-ui/
  
    <FlatList 
    data={data}
    keyExtractor={({id}, index) => id}
    renderItem={({item}) => {
      return (
        <Text>{item.id}, {item.sellername},{item.harvestdate},{item.amountavailable},{item.price}</Text>
      );
    }} 
    />
  }


  return(
    <Text>DebuggerUI</Text>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default AvocadoList;

*/