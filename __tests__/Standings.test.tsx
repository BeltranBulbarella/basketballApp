import Standings from '../src/modules/standings/Standings';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
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

describe('Standings component', () => {
  it('renders correctly', () => {
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

  it('sorts teams by wins, losses, and points correctly', () => {
    const {getByText, getAllByText} = render(
      <NavigationContainer>
        <Standings navigation={mockNavigation} />
      </NavigationContainer>,
    );

    // Test initial sorting by wins
    let teamNames = getAllByText(/Team A|Team B/);
    expect(teamNames[0].props.children).toBe('Team A');
    expect(teamNames[1].props.children).toBe('Team B');

    // Test sorting by losses
    fireEvent.press(getByText('L'));
    teamNames = getAllByText(/Team A|Team B/);
    expect(teamNames[0].props.children).toBe('Team B');
    expect(teamNames[1].props.children).toBe('Team A');

    // Test sorting by points
    fireEvent.press(getByText('PF'));
    teamNames = getAllByText(/Team A|Team B/);
    expect(teamNames[0].props.children).toBe('Team A');
    expect(teamNames[1].props.children).toBe('Team B');
  });
});
