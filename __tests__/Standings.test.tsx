import Standings from '../src/modules/standings/Standings';
import React from 'react';
import {render} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';

jest.mock('../src/utils/data', () => ({
  useGetStandings: () => [
    {
      team_name: 'Team A',
      wins: 5,
      matches_played: 10,
      points_scored: 50,
    },
    {
      team_name: 'Team B',
      wins: 3,
      matches_played: 8,
      points_scored: 40,
    },
  ],
}));

const mockNavigation: any = {
  navigate: jest.fn(),
};

test('renders Standings component', () => {
  const {getByText} = render(
    <NavigationContainer>
      <Standings navigation={mockNavigation} />
    </NavigationContainer>,
  );
  expect(getByText('Standings')).toBeTruthy();
  expect(getByText('Team')).toBeTruthy();
  expect(getByText('W')).toBeTruthy();
  expect(getByText('L')).toBeTruthy();
  expect(getByText('%')).toBeTruthy();
  expect(getByText('PF')).toBeTruthy();
  expect(getByText('Team A')).toBeTruthy();
  expect(getByText('Team B')).toBeTruthy();
});
