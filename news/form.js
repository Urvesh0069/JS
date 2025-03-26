// alert("vukdfhxgvkudhfgk");

let uishow = JSON.parse(localStorage.getItem("key2")) || [];

let news = JSON.parse(localStorage.getItem("key"))||[];

let getvalue = (id)=>{
    return document.getElementById(id).value;
}

let handlenews = (e) =>{
    e.preventDefault();

    let newslist = {

        title: getvalue("title"),
        category: getvalue("category"),
        content: getvalue("content"),
        image: getvalue("image"),

    };

    news.push(newslist);
    localStorage.setItem("key", JSON.stringify(news));

    uishow.push(newslist);
    localStorage.setItem("key2", JSON.stringify(uishow));

    alert("Successfully Created News");

    document.getElementById("newsForm").reset();

};

document.getElementById("newsForm").addEventListener("submit", handlenews);



