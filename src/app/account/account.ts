export interface RegisterModel {
    username: string;
    email: string;
    password: string;
}

export interface LoginModel {
    email: string;
    password: string;
}

export interface LoginResponseModel {
    refreshToken: string;
    accessToken: string;
}

export interface LogoutModel {
    refreshToken: string;
}


export interface UserInterface {
    email: string;
    username: string;
  }