import axios from 'axios';

const baseUrl = process.env.FLASK_SERVER_BASE_URL;

export const askDermatologyGPT = async (question) => {
    try {
        const response = await axios.post(`${baseUrl}/ask`, { question });
        return response.data.answer || "No answer found";
    } catch (error) {
        console.error("Error fetching response:", error);
        return "Error fetching response";
    }
};
