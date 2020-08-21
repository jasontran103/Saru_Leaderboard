import React,{useState} from "react";
import {View,Button, Text, ScrollView, StyleSheet, FlatList}
  from 'react-native'
import PropTypes from "prop-types";
import Constants from 'expo-constants';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Cody Fischer', id: '1' },
    { name: 'Eleanor Pena', id: '2' },
    { name: 'Jerome Bell', id: '3' },
    { name: 'Teresa Webb', id: '4' },
    { name: 'Wade Warren', id: '1' },
    { name: 'Floyd Miles', id: '1' },
    { name: 'Kyle Stark', id: '1' },
    { name: 'Jason Tran', id: '1' },
  ]);

return (
    <View style={styles.container}>

      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    paddingWidth: 173,
    paddingHeight: 29,
    paddingLeft: 99,
    paddingTop: 23,
  },

  people: {
    fontFamily:"Cochin",
  },

  item: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    padding: 30,
    backgroundColor: 'white',
    fontSize: 24,
  },
});
