import React, { useState } from 'react';
import { askDermatologyGPT } from '../get_api/getter';

const Question = ({ onAnswer }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const answer = await askDermatologyGPT(question);
        onAnswer(answer);
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Describe your skin concern or ask a question"
                rows="5"
                cols="50"
            />
            <br />
            <button type="submit">Ask</button>
        </form>
    );
};

export default Question;
