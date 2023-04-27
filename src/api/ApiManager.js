import axios from 'axios';

const ApiManager = axios.create({
    // baseUrl:"http://localhost:#/api",
    responseType:'json',
    withCredencials: true,
});

export default ApiManager;