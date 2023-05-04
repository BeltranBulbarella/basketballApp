import Players from '../src/modules/players/Players';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('../src/utils/data', () => ({
  useGetPlayersStandings: () => [
    {
      player_name: 'John Doe',
      team_name: 'Team A',
      points_scored: 10,
      matches_played: 2,
      mvps: 1,
    },
    {
      player_name: 'Jane Smith',
      team_name: 'Team B',
      points_scored: 20,
      matches_played: 4,
      mvps: 2,
    },
  ],
}));

const mockNavigation: any = {
  navigate: jest.fn(),
};

test('renders Players component', () => {
  const {getByText} = render(
    <NavigationContainer>
      <Players navigation={mockNavigation} />
    </NavigationContainer>,
  );
  expect(getByText('Players')).toBeTruthy();
  expect(getByText('Name')).toBeTruthy();
  expect(getByText('Team')).toBeTruthy();
  expect(getByText('P')).toBeTruthy();
  expect(getByText('PPM')).toBeTruthy();
  expect(getByText('MVP')).toBeTruthy();
  expect(getByText('John Doe')).toBeTruthy();
  expect(getByText('Jane Smith')).toBeTruthy();
});
