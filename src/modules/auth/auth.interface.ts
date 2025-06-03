
export interface IUser {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface SignupDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isActive?: boolean;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface signUpResponseInterface {
    email: string;
}

export interface loginResponseInterface {
    email: string;
    token: string;
    firstName: string;
    lastName: string;
}
