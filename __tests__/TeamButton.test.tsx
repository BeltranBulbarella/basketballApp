import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TeamButton from '../src/modules/match/singleMatchResult/teamButton/TeamButton';

describe('TeamButton', () => {
  it('renders the team name correctly', () => {
    const {getByText} = render(
      <TeamButton name='Team A' key='TeamA' players={[]} id='1' imageURL='' />,
    );
    expect(getByText('Team A')).toBeDefined();
  });
});
