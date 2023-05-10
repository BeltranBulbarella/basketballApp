import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TeamButton from './teamButton/TeamButton';
import type {SingleMatch} from '../../../utils/types';

const SingleMatchResult = (props: SingleMatch) => {
  return (
    <View style={[styles.container, {flexDirection: 'row'}]}>
      <>
        <View style={{marginLeft: 15}}>
          <TeamButton {...props.team1} />
        </View>
        <View>
          <Text style={styles.score}>{props.score}</Text>
        </View>
        <View style={{marginRight: 15}}>
          <TeamButton {...props.team2} />
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  score: {
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 39,
    color: '#000000',
    marginTop: 5,
  },
});

export default SingleMatchResult;
