const accessKey = "lN2FmauBLAQg3RkZv3Uf5PgSIi8QfCNS9_hqsEGZTG0";
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const resultPanel = document.getElementById("result-panel");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;
async function searchImages() {
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        resultPanel.innerHTML = ""; 
    }

    results.forEach((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        resultPanel.appendChild(imageLink);
    });

    if (data.total_pages > page) {
        showMoreBtn.style.display = "block";
    } else {
        showMoreBtn.style.display = "none";
    }
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
});
