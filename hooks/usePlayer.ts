import { create } from "zustand";

interface IPlayerStore {
  ids: Array<string>;
  activeID?: string;
  setID: (id: string) => void;
  setIDs: (ids: Array<string>) => void;
  reset: () => void;
}

const usePlayer = create<IPlayerStore>((set) => ({
  ids: [],
  activeID: undefined,
  setID: (id: string) => set({ activeID: id }),
  setIDs: (ids: Array<string>) => set({ ids }),
  reset: () => set({ ids: [], activeID: undefined }),
}));

export default usePlayer;
