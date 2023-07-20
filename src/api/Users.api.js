import axios from "axios";
import {BASE_URL} from "../../constants.js";

export const getUsers = () => {
    return axios.get(`${BASE_URL}/users`);
}

export const createUser = (data) => {
    return axios.post(`${BASE_URL}/users`, data);
}

export const importUser = (file) => {

}