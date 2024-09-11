import { create } from "zustand";

interface TitleState {
  title: string;
  changeTitle: (newTitle: string) => void;
}
export const useTitleStore = create<TitleState>((set) => ({
  title: "Assists Log",
  changeTitle: (newTitle: string) => set({ title: newTitle }),
}));
