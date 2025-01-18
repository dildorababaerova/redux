import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error; // или вернуть сообщение об ошибке
    }
};


    export default { getAll };