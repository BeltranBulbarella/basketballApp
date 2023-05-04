import React from 'react';
import {render} from '@testing-library/react-native';
import type {Team} from '../src/utils/types';
import SingleMatchResult from '../src/modules/match/singleMatchResult/SingleMatchResult';

const team1: Team = {
  id: '1',
  imageURL: 'https://example.com/team1-logo.svg',
  key: 'TEAM1',
  name: 'Team 1',
  players: [],
};

const team2: Team = {
  id: '2',
  imageURL: 'https://example.com/team2-logo.svg',
  key: 'TEAM2',
  name: 'Team 2',
  players: [],
};

describe('SingleMatchResult', () => {
  it('renders the component correctly', () => {
    const {getByText} = render(
      <SingleMatchResult team1={team1} team2={team2} score='100 - 90' />,
    );

    expect(getByText('Team 1')).toBeTruthy();
    expect(getByText('Team 2')).toBeTruthy();
    expect(getByText('100 - 90')).toBeTruthy();
  });

  it('shows the correct score', () => {
    const {getByText} = render(
      <SingleMatchResult team1={team1} team2={team2} score='80 - 75' />,
    );

    expect(getByText('80 - 75')).toBeTruthy();
  });
});
