import axios from 'axios'

//Configurando uma base URL para a API
const api = axios.create({
    baseURL:'https://api.github.com'
})

export default api