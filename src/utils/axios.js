import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://auth-qa.qencode.com'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('myAppToken')

    return config
})

export default instance