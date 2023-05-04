import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/screens/Home';
import {useNavigation} from '@react-navigation/native';
import {useMatches} from '../src/utils/data';
import type {Player} from '../src/utils/types';

// Mock the hooks
// Mock the hooks
jest.mock('../src/utils/data', () => ({
  useMatches: jest.fn(),
}));

jest.mock('@react-navigation/native');

const mockedUseMatches = useMatches as jest.MockedFunction<typeof useMatches>;
const mockedUseNavigation = useNavigation as jest.MockedFunction<
  typeof useNavigation
>;

describe('Home', () => {
  test('renders correctly', () => {
    const mockMatches = [
      {
        id: '1',
        homeTeamId: '1',
        awayTeamId: '2',
        homeTeamPoints: 100,
        awayTeamPoints: 90,
        homeTeamPlayersMatchStats: [
          {
            player: {
              team: {
                name: 'Team 1',
                imageURL: 'https://example.com/team1.png',
                players: [] as Player[], // Explicitly provide the correct type
                key: 'team1',
              },
            },
          },
        ],
        awayTeamPlayersMatchStats: [
          {
            player: {
              team: {
                name: 'Team 2',
                imageURL: 'https://example.com/team2.png',
                players: [] as Player[], // Explicitly provide the correct type
                key: 'team2',
              },
            },
          },
        ],
      },
    ];

    mockedUseMatches.mockReturnValue(mockMatches as any);
    mockedUseNavigation.mockReturnValue({navigate: jest.fn()});

    const {getByText} = render(<Home />);

    expect(getByText('Last Matches')).toBeTruthy();
    expect(getByText('Team 1')).toBeTruthy();
    expect(getByText('Team 2')).toBeTruthy();
    expect(getByText('100 - 90')).toBeTruthy();
  });
});
