import axios from 'axios'

const api = axios.create({
  baseURL:'http://localhost:3333',
});

export default api;

//Faz a conexção entre o BD e front