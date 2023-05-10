import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import type {Team} from '../../../../utils/types';
import {SvgUri} from 'react-native-svg';

const TeamButton = (props: Team) => {
  return (
    <View style={styles.button}>
      <SvgUri width='30' height='30' uri={props.imageURL} />
      <Text style={styles.teamName} numberOfLines={1}>
        {props.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 130,
    height: 50,
    backgroundColor: '#333333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the left
    paddingHorizontal: 8, // Add padding to the left and right
    borderRadius: 4,
  },
  teamName: {
    width: 90,
    height: 28,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: '#FFFFFF',
    marginLeft: 10,
    marginTop: 12,
  },
});

export default TeamButton;
