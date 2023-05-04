import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import type {ParamListBase, RouteProp} from '@react-navigation/native';

interface Player {
  name: string;
  points: number;
}

export interface MatchResultProps {
  team1: string;
  team2: string;
  score: string;
  team1Players: Player[];
  team2Players: Player[];
}

const Match = () => {
  return (
    <View style={styles.container}>
      <Text>asas</Text>
      {/*<View style={styles.teamContainer}>*/}
      {/*  <Text style={styles.teamName}>{team1}</Text>*/}
      {/*  <Text style={styles.score}>{score}</Text>*/}
      {/*  <Text style={styles.teamName}>{team2}</Text>*/}
      {/*</View>*/}
      {/*<View style={styles.pointsContainer}>*/}
      {/*  {team1Players.map((player: Player, index: number) => (*/}
      {/*    <View key={player.name} style={styles.playerContainer}>*/}
      {/*      <Text style={styles.playerName}>{player.name}</Text>*/}
      {/*      <Text style={styles.playerPoints}>{player.points}</Text>*/}
      {/*      <Text style={styles.playerPoints}>*/}
      {/*        {team2Players[index].points}*/}
      {/*      </Text>*/}
      {/*      <Text style={[styles.playerName, {textAlign: 'right'}]}>*/}
      {/*        {team2Players[index].name}*/}
      {/*      </Text>*/}
      {/*    </View>*/}
      {/*  ))}*/}
      {/*</View>*/}
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  pointsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  teamName: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.05,
    backgroundColor: '#333333',
    textAlign: 'center',
    lineHeight: screenHeight * 0.05,
    fontSize: screenHeight * 0.03,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  playerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  playerName: {
    width: screenWidth * 0.3,
    height: screenHeight * 0.03,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: screenHeight * 0.015,
    lineHeight: screenHeight * 0.02,
    color: '#000000',
    marginRight: 5,
  },
  playerPoints: {
    width: screenWidth * 0.1,
    height: screenHeight * 0.027,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: screenHeight * 0.015,
    lineHeight: screenHeight * 0.02,
    color: '#000000',
  },
  score: {
    width: screenWidth * 0.14,
    height: screenHeight * 0.032,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: screenHeight * 0.016,
    lineHeight: screenHeight * 0.02,
    textAlign: 'center',
    color: '#000000',
  },
});

export default Match;
