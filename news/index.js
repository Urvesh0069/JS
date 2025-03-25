// index.js

const newsForm = document.getElementById("newsForm");
const newsContainer = document.getElementById("newsContainer");

if (newsForm) {
    newsForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const title = document.getElementById("title").value;
        const city = document.getElementById("city").value;
        const state = document.getElementById("state").value;
        const date = document.getElementById("date").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").files[0];
        
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = function () {
            const newsData = { title, city, state, date, content, image: reader.result };
            
            let newsList = localStorage.getItem("news") ? JSON.parse(localStorage.getItem("news")) : [];
            newsList.push(newsData);
            localStorage.setItem("news", JSON.stringify(newsList));
            
            window.location.href = "index.html";
        };
    });
}

if (newsContainer) {
    let newsList = localStorage.getItem("news") ? JSON.parse(localStorage.getItem("news")) : [];
    
    for (let i = 0; i < newsList.length; i++) {
        const newsItem = newsList[i];
        const newsCard = document.createElement("div");
        newsCard.classList.add("col");
        
        newsCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="card-title">${newsItem.title}</h5>
                    <img src="${newsItem.image}" alt="News Image" class="img-fluid">
                    <h5 class="card-city">${newsItem.city}</h5>
                    <h5 class="card-state">${newsItem.state}</h5>
                    <h5 class="card-date">${newsItem.date}</h5>
                    <p class="card-text">${newsItem.content}</p>
                </div>
            </div>`;
        
        newsContainer.appendChild(newsCard);
    }
}
