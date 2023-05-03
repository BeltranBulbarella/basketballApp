import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import type {StandingStat} from '../../utils/types';

const mockData: StandingStat[] = [
  {
    id: 1,
    team: 'Team 1',
    wins: 10,
    losses: 10,
    percentage: 10,
    pointsFor: 10,
    pointsAgainst: 10,
  },
  {
    id: 2,
    team: 'Team 2',
    wins: 10,
    losses: 10,
    percentage: 10,
    pointsFor: 10,
    pointsAgainst: 10,
  },
];

const Standings = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text style={styles.title}>Standings</Text>
      <View style={styles.container}>
        <Text style={styles.subtitleNumber}>#</Text>
        <Text style={styles.subtitleTeam}>Team</Text>
        <Text style={styles.subtitle}>W</Text>
        <Text style={styles.subtitle}>L</Text>
        <Text style={styles.subtitle}>%</Text>
        <Text style={styles.subtitle}>PF</Text>
        <Text style={styles.subtitle}>PC</Text>
      </View>
      {mockData.map((data, index) => {
        return (
          <View style={[styles.container, {marginTop: 10}]} key={index}>
            <Text style={styles.mapSubtitleNumber}>{data.id}</Text>
            <Text style={styles.mapSubtitleTeam}>{data.team}</Text>
            <Text style={styles.mapSubtitle}>{data.wins}</Text>
            <Text style={styles.mapSubtitle}>{data.losses}</Text>
            <Text style={styles.mapSubtitle}>{data.percentage}</Text>
            <Text style={styles.mapSubtitle}>{data.pointsFor}</Text>
            <Text style={styles.mapSubtitle}>{data.pointsAgainst}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    width: 211,
    height: 50,
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 39,
    padding: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  subtitleNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 0.5,
  },
  subtitleTeam: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 2,
  },
  mapSubtitleNumber: {
    fontSize: 20,
    textAlign: 'center',
    flex: 0.5,
  },
  mapSubtitleTeam: {
    fontSize: 16,
    textAlign: 'center',
    flex: 2,
  },
  mapSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    flex: 1,
  },
});

export default Standings;
