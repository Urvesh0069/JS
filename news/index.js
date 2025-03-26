
let uishow = JSON.parse(localStorage.getItem("key2")) || [];

const Uimaker = (uishow) => {
    let container = document.getElementById("row-card");
    container.innerHTML = ""; 

    uishow.map((ele, index) => {
        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerHTML = ele.title;

        let h6 = document.createElement("h6");
        h6.className = "card-time";
        h6.innerHTML = `${ele.category}`;

        let p = document.createElement("p");
        p.className = "scrollable-text";
        p.innerHTML = ele.content;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.className = "btn btn-danger w-100 delete-btn";
        btn.addEventListener("click", () => {
            uishow.splice(index, 1); 
            Uimaker(uishow); 
            localStorage.setItem("key2", JSON.stringify(uishow));
        });

        let body = document.createElement("div");
        body.className = "card-body";
        body.append(h5, h6, p, btn);

        let img = document.createElement("img");
        img.className = "card-img-top";
        img.src = ele.image;

        let card = document.createElement("div");
        card.className = "card h-100";
        card.append(img, body);

        let box = document.createElement("div");
        box.className = "col-md-4 mb-4";
        box.append(card);

        container.appendChild(box);
    });
};

Uimaker(uishow);

    const serach = (value) => {
    let temp = uishow.filter((ele) =>
      ele.title.toLowerCase().includes(value.toLowerCase())
    );
    Uimaker(temp);
  };

  const applyCategoryFilter = () => {
    let selectedCategory = document.getElementById("categoryFilter").value.toLowerCase();

    let filteredNews = uishow.filter((news) => {
        return selectedCategory === "" || news.category.toLowerCase() === selectedCategory;
    });

    Uimaker(filteredNews);
};

document.getElementById("categoryFilter").addEventListener("change", applyCategoryFilter);
  
  document.getElementById("search").addEventListener("input", () => {
    let value = document.getElementById("search").value;
    serach(value);
    console.log(value)
  });
  
  
  const handleFilter = (category) => {
    if (category == "All") {
      Uimaker(uishow);
      return;
    }
    let temp = uishow.filter((ele) => ele.category == category);
    Uimaker(temp);
  };
  



