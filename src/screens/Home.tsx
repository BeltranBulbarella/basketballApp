import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useMatches} from '../utils/data';
import SingleMatchResult from '../modules/match/singleMatchResult/SingleMatchResult';
import type {Match} from '../utils/types';
import {BottomBarCurrent} from '../utils/types';
import BottomBar from '../modules/bottomBar/BottomBar';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const matches = useMatches();
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.title}>Last Matches</Text>
      {matches &&
        matches.map((data: Match) => {
          return (
            <SingleMatchResult
              key={data.id}
              team1={{
                id: data.homeTeamId,
                name: data.homeTeamPlayersMatchStats[0].player.team.name,
                imageURL:
                  data.homeTeamPlayersMatchStats[0].player.team.imageURL,
                players: data.homeTeamPlayersMatchStats[0].player.team.players,
                key: data.homeTeamPlayersMatchStats[0].player.team.key,
              }}
              team2={{
                id: data.awayTeamId,
                name: data.awayTeamPlayersMatchStats[0].player.team.name,
                imageURL:
                  data.awayTeamPlayersMatchStats[0].player.team.imageURL,
                players: data.awayTeamPlayersMatchStats[0].player.team.players,
                key: data.awayTeamPlayersMatchStats[0].player.team.key,
              }}
              score={`${data.homeTeamPoints} - ${data.awayTeamPoints}`}
            />
          );
        })}
      <BottomBar
        navigation={navigation}
        current={BottomBarCurrent.LastMatches}
      />
    </>
  );
};
// onClick={() =>
//   navigation.navigate('Match', {
//     team1: result.team1,
//     team2: result.team2,
//     score: result.score,
//     team1Players: result.team1Players,
//     team2Players: result.team2Players,
//   })
// }

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#192428',
    flex: 1,
  },
  title: {
    width: 211,
    height: 39,
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 39,
    padding: 5,
  },
});

export default Home;
