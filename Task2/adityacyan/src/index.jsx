import ReactDOM from "react-dom";
import React, {Fragment, useEffect, useState} from "react";
import "./style.css";
import {createApi} from "unsplash-js";
import inputValue from "./Search";

console.log("hi", inputValue)


const api = createApi({
    // https://unsplash.com/developers
    accessKey: "7cZuvIpFIZ2aEkO5YlS4OV4TXz4uhkbv3CD4B4yPA88"
});

const PhotoComp = ({photo}) => {
    const {user, urls} = photo;

    return (
        <Fragment>
            <img className="img" src={urls.regular}/>
            {/*<a*/}
            {/*    className="credit"*/}
            {/*    target="_blank"*/}
            {/*    href={`https://unsplash.com/@${user.username}`}*/}
            {/*>*/}
            {/*    {user.name}*/}
            {/*</a>*/}
        </Fragment>
    );
};

// function Searchk() {
//     const [inputValue, setInputValue] = useState('');
//
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };
//
//     const handleSaveClick = () => {
//         // Here you can use the inputValue variable
//         inputk = inputValue;
//
//     };
//
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>React Text Input Example</h1>
//                 <input
//                     type="text"
//                     value={inputValue}
//                     // onChange={handleInputChange}
//                     placeholder="Type something..."
//                 />
//                 <p>You typed: {inputValue}</p>
//                 <button onClick={handleSaveClick}>Save</button>
//             </header>
//         </div>
//     );
// }

const Body = () => {
    const [inputValue, setInputValue] = useState('');
    const[page, setPage] = useState(2);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSaveClick = () => {
        // Here you can use the inputValue variable


    };
    const [inputk, setInputk] = useState("welcome");

    const [data, setPhotosResponse] = useState(null);

    function handleClick() {
        setInputk(inputValue);
        console.log("hi", inputk);
        console.log(inputValue)
        console.log(data)


    }
    function pageInc() {
        setPage(page + 1);
        console.log(page)
    }

    useEffect(() => {
        api.search
            .getPhotos({
                query: inputk,

                perPage: 25,
            })
            .then(result => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log("something went wrong!");
            });
    },);

    if (data === null) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="main">
                <header className="App-header">
                    <h1>adc</h1>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                    />
                    <div className="controls">
                    {/*<p>You typed: {inputValue}</p>*/}
                    <button onClick={handleClick}>Save</button>
                    </div>
                </header>
                <div className="feed">
                    <ul className="columnUl">
                        {data.response.results.map(photo => (
                            <li key={photo.id} className="li">
                                <PhotoComp photo={photo}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <footer className="App-footer">
                    <button className="button" onClick={pageInc}>next page</button>
                </footer>
            </div>
        );
    }
};

const Home = () => {
    return (
        <main className="root">

            <Body/>
        </main>
    );
};

ReactDOM.render(
    <div>
        {/*<Search/>*/}
        <Home/>

    </div>
    , document.getElementById("root"));
