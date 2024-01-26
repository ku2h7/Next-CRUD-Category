export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}

export interface RegisterFormProps {
  onRegisterSuccess: () => void;
}

export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}
