let k=0;
let i=0;
var t=0;
var cardData = [
    { title: "Card " + t, content: "This is the content of Card 1." },
   
];
  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const key="4fe360bea1754332b25594ca6cc98ccc";
const api = "https://newsapi.org/v2/top-headlines?country=in&apiKey=4fe360bea1754332b25594ca6cc98ccc";
async function checknews(){
    const response = await fetch(api + `&appid=${key}`);
    var data = await response.json();
    console.log(data);
    console.log(data.articles.length)
    k=data.articles.length;
    for(i=0;i<k;i++){
    cardData = [
            { title: data.articles[t].title, content: data.articles[t].description ,image: data.articles[t].urlToImage},
        ];
        addCardsToContainer(cardData);
    t++;
    }
}
console.log(k);
checknews();
    // Sample data for cards


    // Function to create a card element
    function createCard(title, content,image) {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${image}" id="img">
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        return card;
    }

    // Function to add cards to the cardContainer
    function addCardsToContainer(data) {
        const cardContainer = document.getElementById("cardContainer");
        data.forEach(item => {
            const card = createCard(item.title, item.content,item.image);
            cardContainer.appendChild(card);
        });

    }
    // Add cards to the container
  