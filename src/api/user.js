import { API } from "./api";

export const signUp = (user) => {
    return API.post(`/auth/signup`, user)
}

export const signIn = (user) => {
    return API.post(`/auth/signin`, user)
}