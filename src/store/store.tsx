import {create} from 'zustand';

interface BearState {
  index: number;
  setIndex: (index: number) => void;
}

export const useDataStore = create<BearState>((set) => ({
  index: 0,
  setIndex: (index: number) => set((state) => ({index})),
}));
