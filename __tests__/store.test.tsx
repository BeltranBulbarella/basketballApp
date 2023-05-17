import {act} from '@testing-library/react-hooks';
import {useDataStore} from '../src/store/store';

describe('useDataStore', () => {
  it('initializes with correct default values', () => {
    const state = useDataStore.getState();

    expect(state.index).toBe(0);
  });

  it('updates the index correctly', () => {
    act(() => {
      useDataStore.getState().setIndex(2);
    });

    const state = useDataStore.getState();

    expect(state.index).toBe(2);
  });

  afterEach(() => {
    act(() => {
      useDataStore.setState({index: 0});
    });
  });
});
