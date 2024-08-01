import { AnimatableStringValue } from "react-native";
import { api } from "../../api";

export interface IUser {
    name?: string
    email?: string
    password?: string
}

export interface IRespondeUser {
    name: string
    email: string
    creeated_at: string
    updated_at: string
    id: number
}

export interface IAuthenticated {
    user: IResponseUSer
    token: {
        token: string
        expires_at: string
    }
}

class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    register(data: IUser) {
        return api.post<IAuthenticated>('/login', data)
    }
}

export default new UserData()