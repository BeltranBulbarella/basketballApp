import Home from '../src/screens/Home';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ScrollView} from 'react-native';

const mockRefetch = jest.fn();

jest.mock('../src/utils/data', () => ({
  useMatches: () => ({
    refetch: mockRefetch,
    loading: false,
    matchResult: [
      {
        id: '1',
        homeTeamId: 'teamA',
        homeTeamPlayersMatchStats: [
          {
            player: {
              team: {name: 'Team A', imageURL: '', players: [], key: ''},
            },
          },
        ],
        homeTeamPoints: 50,
        awayTeamId: 'teamB',
        awayTeamPlayersMatchStats: [
          {
            player: {
              team: {name: 'Team B', imageURL: '', players: [], key: ''},
            },
          },
        ],
        awayTeamPoints: 40,
        game_date: '2023-05-17',
        mvp: {
          id: 'player1',
          name: 'Player 1',
          number: '1',
          teamId: 'teamA',
          team: {
            id: 'teamA',
            name: 'Team A',
            imageURL: '',
            key: '',
            players: [],
          },
        },
        mvpId: 'player1',
      },
    ],
  }),
}));

const mockNavigation: any = {
  navigate: jest.fn(),
};

describe('Home component', () => {
  it('renders correctly', () => {
    const {getByText} = render(
      <NavigationContainer>
        <Home navigation={mockNavigation} />
      </NavigationContainer>,
    );
    expect(getByText('Last Matches')).toBeTruthy();
  });

  it('navigates to Match screen when match is pressed', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Home navigation={mockNavigation} />
      </NavigationContainer>,
    );

    const match = getByTestId('match-1');
    fireEvent.press(match);

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Match');
  });
});
