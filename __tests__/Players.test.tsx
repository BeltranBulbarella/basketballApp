import React from 'react';
import {render} from '@testing-library/react-native';
import Players from '../src/modules/players/Players';

const mockNavigation: any = {
  navigate: jest.fn(),
};

describe('Players', () => {
  it('renders the component correctly', () => {
    const {getByText, getAllByText} = render(
      <Players navigation={mockNavigation} />,
    );

    expect(getByText('Players')).toBeTruthy();
    expect(getByText('Player 1')).toBeTruthy();
    expect(getByText('Team 1')).toBeTruthy();
    const elementsWith10 = getAllByText('10');
    expect(elementsWith10).toHaveLength(3); // If you expect only one element with text '10'
  });
});
