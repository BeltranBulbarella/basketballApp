import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import BottomBar from '../src/modules/bottomBar/BottomBar';
import {BottomBarCurrent} from '../src/utils/types';

const mockNavigation: any = {
  navigate: jest.fn(),
};

describe('BottomBar', () => {
  it('renders the component correctly and responds to onPress events', () => {
    const {getByTestId} = render(
      <BottomBar
        navigation={mockNavigation}
        current={BottomBarCurrent.LastMatches}
      />,
    );

    const clock = getByTestId('bottombar-clock');
    const barChart2 = getByTestId('bottombar-barchart2');
    const list = getByTestId('bottombar-list');

    expect(clock.props.color).toEqual('#F29D38');
    expect(barChart2.props.color).toEqual('#FFFFFF');
    expect(list.props.color).toEqual('#FFFFFF');

    fireEvent.press(clock);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('LastMatches');

    fireEvent.press(barChart2);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Standings');

    fireEvent.press(list);
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Players');
  });
});
