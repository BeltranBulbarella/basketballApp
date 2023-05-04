import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import type {PlayerStat} from '../../utils/types';
import BottomBar from '../bottomBar/BottomBar';
import {useGetPlayersStandings} from '../../utils/data';
import {BottomBarCurrent, StandingStat} from '../../utils/types';

const Players = ({navigation}: {navigation: any}) => {
  const playersStandings: PlayerStat[] = useGetPlayersStandings();
  const [sort, setSort] = useState<{key: keyof PlayerStat; asc: boolean}>({
    key: 'points_scored',
    asc: false,
  });
  return (
    <>
      <View style={{padding: 8}}>
        <Text style={styles.title}>Players</Text>
        <View style={styles.container}>
          <Text style={styles.subtitleNumber}>#</Text>
          <Text style={styles.subtitleTeam}>Name</Text>
          <Text style={styles.subtitleTeam}>Team</Text>
          <Text
            style={styles.subtitle}
            onPress={() => setSort({key: 'points_scored', asc: false})}
          >
            P
          </Text>
          <Text style={styles.subtitle}>PPM</Text>
          <Text
            style={styles.subtitle}
            onPress={() => setSort({key: 'mvps', asc: false})}
          >
            MVP
          </Text>
        </View>
        <ScrollView>
          {playersStandings &&
            playersStandings
              .sort((a, b) => {
                if (sort.asc) return +a[sort.key] - +b[sort.key];
                else return +b[sort.key] - +a[sort.key];
              })
              .map((data, index) => {
                return (
                  <View style={[styles.container, {marginTop: 10}]} key={index}>
                    <Text style={styles.mapSubtitleNumber}>{index + 1}</Text>
                    <Text style={styles.mapSubtitleTeam} numberOfLines={1}>
                      {data.player_name}
                    </Text>
                    <Text style={styles.mapSubtitleTeam}>{data.team_name}</Text>
                    <Text style={styles.mapSubtitle}>{data.points_scored}</Text>
                    <Text style={styles.mapSubtitle}>
                      {data.points_scored / data.matches_played}
                    </Text>
                    <Text style={styles.mapSubtitle}>{data.mvps}</Text>
                  </View>
                );
              })}
        </ScrollView>
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
    fontSize: 16,
    textAlign: 'center',
    flex: 0.5,
  },
  mapSubtitleTeam: {
    fontSize: 15,
    textAlign: 'center',
    flex: 2,
  },
  mapSubtitle: {
    fontSize: 15,
    textAlign: 'center',
    flex: 1,
  },
});

export default Players;
