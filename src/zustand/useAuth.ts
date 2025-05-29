// store/auth.ts
import { create } from 'zustand';
import type { User } from '../interfaces/user';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
