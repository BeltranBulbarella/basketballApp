import React from 'react';
import {render} from '@testing-library/react-native';
import Match from '../src/modules/match/Match';

// Mock out dependencies
jest.mock('../src/store/store', () => ({
  useDataStore: jest.fn(() => [0]),
}));

jest.mock('../src/utils/data', () => ({
  useMatches: jest.fn(() => ({
    matchResult: [
      {
        homeTeamPlayersMatchStats: [
          {
            player: {
              name: 'Player 1', // Add this
              team: {
                name: 'Team 1',
                imageURL: 'http://team1.com/image.png',
              },
            },
            points: 10, // Add this if you want to test points as well
          },
        ],
        homeTeamPoints: 50,
        awayTeamPlayersMatchStats: [
          {
            player: {
              name: 'Player 2', // And this
              team: {
                name: 'Team 2',
                imageURL: 'http://team2.com/image.png',
              },
            },
            points: 20, // And this
          },
        ],
        awayTeamPoints: 45,
      },
    ],
  })),
}));

describe('Match', () => {
  it('renders the match correctly', () => {
    const {getByText, getByTestId} = render(<Match />);

    expect(getByText('Team 1')).toBeTruthy();
    expect(getByText('Team 2')).toBeTruthy();
    expect(getByText('50 - 45')).toBeTruthy();
  });

  it('renders the players correctly', () => {
    const {getByText} = render(<Match />);

    // Assuming the players names are 'Player 1' and 'Player 2'
    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('Player 2')).toBeTruthy();
  });
  it('renders the players and their points correctly', () => {
    const {getByText} = render(<Match />);

    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('10')).toBeTruthy(); // Add this
    expect(getByText('Player 2')).toBeTruthy();
    expect(getByText('20')).toBeTruthy(); // And this
  });
});
