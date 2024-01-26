export interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}