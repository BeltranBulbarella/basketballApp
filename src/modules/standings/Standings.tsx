import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {StandingStat} from '../../utils/types';
import BottomBar from '../bottomBar/BottomBar';
import {BottomBarCurrent} from '../../utils/types';
import {useGetStandings} from '../../utils/data';

const Standings = ({navigation}: {navigation: any}) => {
  const standings: StandingStat[] = useGetStandings();
  const [sort, setSort] = useState<{key: keyof StandingStat; asc: boolean}>({
    key: 'wins',
    asc: false,
  });
  return (
    <>
      <View style={{padding: 8}}>
        <Text style={styles.title}>Standings</Text>
        <View style={styles.container}>
          <Text style={styles.subtitleNumber}>#</Text>
          <Text style={styles.subtitleTeam}>Team</Text>
          <Text
            style={styles.subtitle}
            onPress={() => setSort({key: 'wins', asc: false})}
          >
            W
          </Text>
          <Text
            style={styles.subtitle}
            onPress={() => setSort({key: 'wins', asc: true})}
          >
            L
          </Text>
          <Text style={styles.subtitle}>%</Text>
          <Text
            style={styles.subtitle}
            onPress={() => setSort({key: 'points_scored', asc: false})}
          >
            PF
          </Text>
        </View>
        <ScrollView>
          {standings &&
            standings
              .filter((t) => t.matches_played > 0)
              .sort((a, b) => {
                if (sort.asc) return +a[sort.key] - +b[sort.key];
                else return +b[sort.key] - +a[sort.key];
              })
              .map((data, index) => {
                return (
                  <View style={[styles.container, {marginTop: 10}]} key={index}>
                    <Text style={styles.mapSubtitleNumber}>{index + 1}</Text>
                    <Text style={styles.mapSubtitleTeam}>{data.team_name}</Text>
                    <Text style={styles.mapSubtitle}>{data.wins}</Text>
                    <Text style={styles.mapSubtitle}>
                      {data.matches_played - data.wins}
                    </Text>
                    <Text style={styles.mapSubtitle}>
                      {data.wins / data.matches_played}
                    </Text>
                    <Text style={styles.mapSubtitle}>{data.points_scored}</Text>
                  </View>
                );
              })}
        </ScrollView>
      </View>
      <BottomBar navigation={navigation} current={BottomBarCurrent.Standings} />
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

export default Standings;
