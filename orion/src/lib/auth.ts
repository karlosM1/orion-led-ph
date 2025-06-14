import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      signIn: async (email: string, password: string) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (email && password) {
          const user: User = {
            id: "1",
            email,
            firstName: "Karlos",
            lastName: "Serrano",
            createdAt: new Date().toISOString(),
          };
          set({ user, isAuthenticated: true });
        } else {
          throw new Error("Invalid credentials");
        }
      },

      signUp: async (
        email: string,
        password: string,
        firstName: string,
        lastName: string
      ) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (email && password && firstName && lastName) {
          const user: User = {
            id: Math.random().toString(36).substr(2, 9),
            email,
            firstName,
            lastName,
            createdAt: new Date().toISOString(),
          };
          set({ user, isAuthenticated: true });
        } else {
          throw new Error("Registration failed");
        }
      },

      signOut: () => {
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);
