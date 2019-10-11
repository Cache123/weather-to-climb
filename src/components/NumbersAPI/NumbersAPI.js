import React, { useState, useEffect } from 'react';

function NumbersAPI() {
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetch("http://numbersapi.com/50")
            .then(response => response.text())
            .then(textResponse => setFact(textResponse))
    }, [])

    return (
        <div>
            {fact}
        </div>
    )
}

export default NumbersAPI;