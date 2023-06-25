export interface RegistrationData {
  email: string;
  name: string;
  password: string;
}

export interface AutenticationData {
  email: string;
  password: string;
}

export interface RefreshTokenResponse {
  token: string;
  refreshToken: string;
}

export interface SignInResponse {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}
