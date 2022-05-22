import React, {useRef, useEffect } from 'react';

function App(props) {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    return (
        <div className="App">
            <input type="text" ref={inputRef} placeholder="Your name" /> <br /> <br />
            <input type="email" placeholder="Your email" /> <br /> <br />
            <button onClick={() => inputRef.current.focus()} className="start">Submit</button>
        </div>
    );
}

export default App;