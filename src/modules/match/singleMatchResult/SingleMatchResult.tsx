import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {Team} from '../../../utils/interfaces';
import TeamButton from './teamButton/TeamButton';

interface CustomButtonProps {
  team1: Team;
  team2: Team;
  score: string;
}

const SingleMatchResult = (props: CustomButtonProps) => {
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
