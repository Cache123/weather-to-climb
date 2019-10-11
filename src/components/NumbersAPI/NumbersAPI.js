import React, { useState, useEffect } from 'react';

function NumbersAPI() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch("http://numbersapi.com/50")
            .then(response => response.text())
            .then(textResponse => setFact(textResponse))
    }, [])

    return (
        <div className="numbers-api-container">
            <button>Random Fact</button>
            <p>{fact}</p>
        </div>
    )
}

export default NumbersAPI;