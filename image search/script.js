
const accesskey = "7neafM3-I4xNle_34J_CY56c5iEYS7D8r4_kUHL-D5M";

const formE1 = document.querySelector ("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;


    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page ==1){
        searchResults.innerHTML = ""
    }
    // ... (previous code)

    results.map((result) => {
    const imagewrapper = document.createElement('div');
    imagewrapper.classList.add("search-result");
    const image = document.createElement('img');
    image.src = result.urls.small;  // Fixed: Use result.urls.small
    image.alt = result.alt_description;  // Fixed: Use result.alt_description
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imagewrapper.appendChild(image);
    imagewrapper.appendChild(imageLink);
    searchResults.appendChild(imagewrapper);
});

// ... (remaining code)


    page++;
    if(page > 1){
        showMore.style.display = "block";
    }
}

formE1.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages();
});
showMore.addEventListener("click", () =>{
    searchImages();
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    // Dynamically create an icon element
    const icon = document.createElement('div');
    icon.classList.add('navbar-icon');
    icon.innerHTML = `
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    `;
    
    // Append the icon to the navbar
    navbar.appendChild(icon);

    const menu = document.getElementById('menu');

    // Click event for the icon
    icon.addEventListener('click', function () {
        menu.classList.toggle('show');
        navbar.classList.toggle('hide');
    });

    // Click event for the document
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !icon.contains(event.target)) {
            menu.classList.remove('show');
            navbar.classList.remove('hide');
        }
    });
});



