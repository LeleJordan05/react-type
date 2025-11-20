import { create } from "zustand";

interface AddState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useAddStore = create<AddState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
