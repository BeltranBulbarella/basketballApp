import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Standings = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text style={styles.title}>Standings</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    width: 211,
    height: 50,
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 35,
    padding: 5,
  },
});

export default Standings;
