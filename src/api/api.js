import axios from 'axios'

const URL = 'http://localhost:5000/api/v1'

export const API = axios.create({ baseURL: URL })