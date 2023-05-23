import axios from 'axios';

export default axios.create({
    baseURL:'https://adde-2600-6c56-6000-71d-e5ee-23e-807e-c19.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning": "true"}

});