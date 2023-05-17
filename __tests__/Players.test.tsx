import Players from '../src/modules/players/Players';
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
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

describe('Players component', () => {
  it('renders correctly', () => {
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

  it('navigates correctly when BottomBar buttons are pressed', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <Players navigation={mockNavigation} />
      </NavigationContainer>,
    );

    fireEvent.press(getByTestId('bottombar-clock'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('LastMatches');

    fireEvent.press(getByTestId('bottombar-barchart2'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Standings');

    fireEvent.press(getByTestId('bottombar-list'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Players');
  });

  it('sorts players by points and MVPs correctly', () => {
    const {getByText, getAllByText} = render(
      <NavigationContainer>
        <Players navigation={mockNavigation} />
      </NavigationContainer>,
    );

    // Test initial sorting by points
    let playerNames = getAllByText(/John Doe|Jane Smith/);
    expect(playerNames[0].props.children).toBe('Jane Smith');
    expect(playerNames[1].props.children).toBe('John Doe');

    // Test sorting by MVPs
    fireEvent.press(getByText('MVP'));
    playerNames = getAllByText(/John Doe|Jane Smith/);
    expect(playerNames[0].props.children).toBe('Jane Smith');
    expect(playerNames[1].props.children).toBe('John Doe');
  });
});
