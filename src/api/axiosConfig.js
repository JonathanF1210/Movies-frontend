import axios from 'axios';

export default axios.create({
    baseURL:'https://3176-2600-6c56-6000-71d-db6-cbe3-25af-16d8.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}

});