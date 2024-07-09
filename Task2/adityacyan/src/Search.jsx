import React, {useState} from "react"


import "./style.css";

function Search() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };



    return (
        <div className="App">
            <header className="App-header">

                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                {/*<p>You typed: {inputValue}</p>*/}
                {/*<button onClick={handleClick}>Save</button>*/}
            </header>
        </div>

    );
}

export default Search;
