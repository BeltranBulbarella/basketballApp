import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useDataStore} from '../../store/store';
import {useMatches} from '../../utils/data';
import TeamButton from './singleMatchResult/teamButton/TeamButton';

const Match = () => {
  const [index] = useDataStore((state) => [state.index]);
  const {matchResult: matches} = useMatches();
  return (
    <View style={styles.container}>
      <View style={styles.teamContainer}>
        <TeamButton
          key='1'
          players={[]}
          id='1'
          name={
            matches[index] &&
            matches[index].homeTeamPlayersMatchStats[0].player.team.name
          }
          imageURL={
            matches[index] &&
            matches[index].homeTeamPlayersMatchStats[0].player.team.imageURL
          }
        />
        <Text style={styles.score}>
          {matches[index] &&
            `${matches[index].homeTeamPoints} - ${matches[index].awayTeamPoints}`}
        </Text>
        <TeamButton
          key='2'
          players={[]}
          id='2'
          name={
            matches[index] &&
            matches[index].awayTeamPlayersMatchStats[0].player.team.name
          }
          imageURL={
            matches[index] &&
            matches[index].awayTeamPlayersMatchStats[0].player.team.imageURL
          }
        />
      </View>
      <View style={styles.pointsContainer}>
        {matches[index] &&
          matches[index].homeTeamPlayersMatchStats.map(
            (player: any, index2: number) => {
              return (
                <View key={player.player.name} style={styles.playerContainer}>
                  <Text style={styles.playerName} numberOfLines={1}>
                    {player.player.name}
                  </Text>
                  <Text style={styles.playerPoints}>{player.points}</Text>
                  <Text style={styles.playerPoints}>
                    {matches[index] &&
                      matches[index].awayTeamPlayersMatchStats[index2].points}
                  </Text>
                  <Text
                    style={[styles.playerName, {textAlign: 'right'}]}
                    numberOfLines={1}
                  >
                    {matches[index] &&
                      matches[index].awayTeamPlayersMatchStats[index2].player
                        .name}
                  </Text>
                </View>
              );
            },
          )}
      </View>
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
    padding: 8,
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
    fontSize: screenHeight * 0.02, // Increased font size
    lineHeight: screenHeight * 0.025, // Adjusted line height
    color: '#000000',
    marginRight: 5,
    marginTop: 10,
  },
  playerPoints: {
    height: screenHeight * 0.027,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: screenHeight * 0.02, // Increased font size
    lineHeight: screenHeight * 0.025, // Adjusted line height
    color: '#000000',
  },
  score: {
    height: screenHeight * 0.032,
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: screenHeight * 0.022,
    lineHeight: screenHeight * 0.025,
    textAlign: 'center',
    color: '#000000',
  },
});

export default Match;
