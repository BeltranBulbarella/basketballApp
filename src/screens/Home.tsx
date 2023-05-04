import React, {useState} from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMatches} from '../utils/data';
import SingleMatchResult from '../modules/match/singleMatchResult/SingleMatchResult';
import type {Match} from '../utils/types';
import {BottomBarCurrent} from '../utils/types';
import BottomBar from '../modules/bottomBar/BottomBar';
import {useNavigation} from '@react-navigation/native';

const Home = ({navigation}: {navigation: any}) => {
  const {refetch, loading, matchResult: matches} = useMatches();
  return (
    <>
      <Text style={[styles.title, {marginLeft: 8}]}>Last Matches</Text>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={refetch} refreshing={loading} />
        }
      >
        {matches &&
          matches.map((data: Match, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Match')}
              >
                <SingleMatchResult
                  key={data.id}
                  team1={{
                    id: data.homeTeamId,
                    name: data.homeTeamPlayersMatchStats[0].player.team.name,
                    imageURL:
                      data.homeTeamPlayersMatchStats[0].player.team.imageURL,
                    players:
                      data.homeTeamPlayersMatchStats[0].player.team.players,
                    key: data.homeTeamPlayersMatchStats[0].player.team.key,
                  }}
                  team2={{
                    id: data.awayTeamId,
                    name: data.awayTeamPlayersMatchStats[0].player.team.name,
                    imageURL:
                      data.awayTeamPlayersMatchStats[0].player.team.imageURL,
                    players:
                      data.awayTeamPlayersMatchStats[0].player.team.players,
                    key: data.awayTeamPlayersMatchStats[0].player.team.key,
                  }}
                  score={`${data.homeTeamPoints} - ${data.awayTeamPoints}`}
                />
              </TouchableOpacity>
            );
          })}
      </ScrollView>
      <BottomBar
        navigation={navigation}
        current={BottomBarCurrent.LastMatches}
      />
    </>
  );
};

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
