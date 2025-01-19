import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (error) {
        console.error("Error fetching notes:", error);
        throw error; 
    }
};

const createNew = async (content) => {
    const object = { content, important: false };
    const response = await axios.post(baseUrl, object);
    return response.data;
} 

const importanceOf =  async (id) => {
    const url = `${baseUrl}/${id}`;
    const note = await axios.get(url);
    const changedNote = { ...note.data, important: !note.data.important };
    const response = await axios.put(url, changedNote);
    return response.data;
}
    


    export default { getAll, createNew, importanceOf };