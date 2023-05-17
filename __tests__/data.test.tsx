import {renderHook} from '@testing-library/react-hooks';
import axios from 'axios';
import {
  useMatches,
  useGetPlayersStandings,
  useGetStandings,
} from '../src/utils/data';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useMatches', () => {
  it('fetches matches correctly', async () => {
    mockedAxios.get.mockResolvedValueOnce({data: {content: [{}]}});

    const {result, waitForNextUpdate} = renderHook(() => useMatches());
    await waitForNextUpdate();

    expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:8080/match');
    expect(result.current.matchResult).toEqual([{}]);
    expect(result.current.loading).toEqual(false);
  });
});

describe('useGetPlayersStandings', () => {
  it('fetches player standings', async () => {
    const mockData = {
      content: [
        {playerId: '1', points: 30}, // Adjust as needed
      ],
    };

    mockedAxios.get.mockResolvedValueOnce({data: mockData});

    const {result, waitForNextUpdate} = renderHook(() =>
      useGetPlayersStandings(),
    );

    await waitForNextUpdate();

    expect(result.current).toEqual(mockData.content);
  });
});

describe('useGetStandings', () => {
  it('fetches standings', async () => {
    const mockData = {
      content: [
        {teamId: '1', points: 30}, // Adjust as needed
      ],
    };

    mockedAxios.get.mockResolvedValueOnce({data: mockData});

    const {result, waitForNextUpdate} = renderHook(() => useGetStandings());

    await waitForNextUpdate();

    expect(result.current).toEqual(mockData.content);
  });
});
