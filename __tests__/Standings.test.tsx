import React from 'react';
import {render} from '@testing-library/react-native';
import Standings from '../src/modules/standings/Standings';

const mockNavigation: any = {
  navigate: jest.fn(),
};

describe('Standings', () => {
  it('renders the component correctly', () => {
    const {getByText, getAllByText} = render(
      <Standings navigation={mockNavigation} />,
    );

    expect(getByText('Standings')).toBeTruthy();
    expect(getByText('Team 1')).toBeTruthy();
    expect(getByText('Team 2')).toBeTruthy();
    const elementsWith10 = getAllByText('10');
    expect(elementsWith10).toHaveLength(5); // Update the expected length to 6
  });
});
