import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import type {PlayerStat} from '../../utils/types';
import {BottomBarCurrent} from '../../utils/types';
import BottomBar from '../bottomBar/BottomBar';

const mockData: PlayerStat[] = [
  {
    id: 1,
    name: 'Player 1',
    team: 'Team 1',
    points: 20,
    ppm: 20,
    mvp: 20,
  },
  {
    id: 2,
    name: 'Player 2',
    team: 'Team 2',
    points: 10,
    ppm: 10,
    mvp: 10,
  },
];

const Players = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View>
        <Text style={styles.title}>Players</Text>
        <View style={styles.container}>
          <Text style={styles.subtitleNumber}>#</Text>
          <Text style={styles.subtitleTeam}>Name</Text>
          <Text style={styles.subtitleTeam}>Team</Text>
          <Text style={styles.subtitle}>P</Text>
          <Text style={styles.subtitle}>PPM</Text>
          <Text style={styles.subtitle}>MVP</Text>
        </View>
        {mockData.map((data, index) => {
          return (
            <View style={[styles.container, {marginTop: 10}]} key={index}>
              <Text style={styles.mapSubtitleNumber}>{data.id}</Text>
              <Text style={styles.mapSubtitleTeam}>{data.name}</Text>
              <Text style={styles.mapSubtitleTeam}>{data.team}</Text>
              <Text style={styles.mapSubtitle}>{data.points}</Text>
              <Text style={styles.mapSubtitle}>{data.ppm}</Text>
              <Text style={styles.mapSubtitle}>{data.mvp}</Text>
            </View>
          );
        })}
      </View>
      <BottomBar navigation={navigation} current={BottomBarCurrent.Players} />
    </>
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

export default Players;
