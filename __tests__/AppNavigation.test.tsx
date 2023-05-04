import React from 'react';
import {render} from '@testing-library/react-native';
import Home from '../src/screens/Home';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({navigate: jest.fn()}),
}));
jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: jest
    .fn()
    .mockReturnValue({Navigator: jest.fn(), Screen: jest.fn()}),
}));

describe('Home', () => {
  it('renders correctly', () => {
    const {getByText} = render(<Home />);
    expect(getByText('Last Matches')).toBeDefined();
  });
});
