// import React from 'react';
// import {render} from '@testing-library/react-native';
// import type {MatchResultProps} from '../src/modules/match/Match';
// import Match from '../src/modules/match/Match';
//
// const matchResultProps: MatchResultProps = {
//   team1: 'Team 1',
//   team2: 'Team 2',
//   score: '100 - 90',
//   team1Players: [
//     {name: 'Player 1A', points: 30},
//     {name: 'Player 1B', points: 20},
//   ],
//   team2Players: [
//     {name: 'Player 2A', points: 25},
//     {name: 'Player 2B', points: 15},
//   ],
// };
//
// describe('Match', () => {
//   it('renders the component correctly', () => {
//     const {getByText} = render(<Match />);
//
//     expect(getByText('Team 1')).toBeTruthy();
//     expect(getByText('Team 2')).toBeTruthy();
//     expect(getByText('100 - 90')).toBeTruthy();
//
//     expect(getByText('Player 1A')).toBeTruthy();
//     expect(getByText('Player 1B')).toBeTruthy();
//     expect(getByText('Player 2A')).toBeTruthy();
//     expect(getByText('Player 2B')).toBeTruthy();
//
//     expect(getByText('30')).toBeTruthy();
//     expect(getByText('20')).toBeTruthy();
//     expect(getByText('25')).toBeTruthy();
//     expect(getByText('15')).toBeTruthy();
//   });
// });
