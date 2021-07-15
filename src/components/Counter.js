import React, { useState, useEffect } from 'react';
import './counterStyle.css';
function Counter() {
    // Condition 1
    //The counter can be initialised with a certain value. 
    // If no value is present at initialisation then the counter will start at 1.
    const initialCounter = 1;
    const maxCounter = 1000;
    const [counter, setCounter] = useState(initialCounter)
    useEffect(() => {
        // Condition 2
        // The counter can be initialised with a max value.
        // If no max value is present, then assume that the max value will be 1000. 
        // If a max value is present then the counter can be incremented to only that max value.
        console.log("Changed");
        counter >= maxCounter && setCounter(maxCounter)
    }, [counter])
    return (
        <div>
            <div className="counter-container flex-center">
                <div className="property" onClick={() => setCounter(counter - 1)}>&minus;</div>
                <div className="property">
                    {/* To avoide warning due to "no input" we added extra  check for empty input*/}
                    {/* Condition 3: The user can also type a value into the counter. */}
                    <input type="number" value={counter} 
                        onChange={e => setCounter(e.target.value && parseInt(e.target.value))} />
                </div>
                <div className="property" onClick={() => setCounter(counter + 1)}>&#65291;</div>
            </div>
        </div>
    )
}

export default Counter;