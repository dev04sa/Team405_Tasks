require('dotenv').config()


const imagesContainer = document.querySelector(".gallery");
const showMore = document.querySelector(".showMore");
const searchButton = document.querySelector("#searchButton");
// const searchList = document.querySelector(".search_list ul li");


const apikey="";


let currentpage = 1 ;
const perpage = 15 ;
let searchInput = null ;

const addHtml = (images) => {
    // making li of all the images and adding it to page 
    imagesContainer.innerHTML += images.map(img => 
        `<li><img src="${img.src.large2x}" alt="images"></li>`
    ).join("");
}

showMore.innerHTML = "no search yet..";
showMore.classList.add("noSearch");

const getImages = (apiURL) => {
    showMore.innerHTML = "Loading images...";
    showMore.classList.remove("noSearch");
    showMore.classList.add("disabled");
    fetch(apiURL,{
        headers : {Authorization : apikey || process.env.APIURI}
    }).then(res => res.json()).then(data =>{
        addHtml(data.photos);
        showMore.innerHTML = "show more";
        showMore.classList.remove("disabled");
    }).
    catch(() => alert("Failed Load Images..."))
}

// getImages(`https://api.pexels.com/v1/curated?page=${currentpage}&per_page=${perpage}`);

const showMoreImages = () =>{
    currentpage++; // MAking next page
    let apiURL = `https://api.pexels.com/v1/search?query=${searchInput}&page=${currentpage}&per_page=${perpage}`;
    getImages(apiURL);
}

const findSearchImages = () =>{
    // if search key is pressed search the value
    currentpage = 1 ;
    searchInput = document.querySelector("#Input").value;
    imagesContainer.innerHTML = "";
    getImages(`https://api.pexels.com/v1/search?query=${searchInput}&page=${currentpage}&per_page=${perpage}`);
    if (searchInput==="") return searchInput = null ;


}

showMore.addEventListener('click',showMoreImages);
searchButton.addEventListener('click',findSearchImages);

searchInput = document.querySelector("#Input");
    let listitems = document.querySelectorAll(".item").
forEach(element => {
        element.addEventListener("click",()=>{
            currentpage = 1 ;
            // searchInput =element.textContent;
            imagesContainer.innerHTML = "";
            getImages(`https://api.pexels.com/v1/search?query=${element.textContent}&page=${currentpage}&per_page=${perpage}`);
            searchInput.value = element.textContent;
        })
    });
   