window.onload = function(){
    getAllStatesCovid(); 
    loadHtml(); 
}

async function getAllStatesCovid(){
    const response = await fetch("https://covid-19-data.p.rapidapi.com/report/country/name?name=USA&date=2020-04-01", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-data.p.rapidapi.com",
            "x-rapidapi-key": "1b2ffb172cmshfd5b8be1a86bbb0p19eb83jsne4d4b029634c"
        }
    });
    var data = await response.json();
    var provinces
    data.forEach(element => {
        provinces = element.provinces;
    });
    provinces.forEach(element => {
        console.log(element); 
    });
}

function loadHtml(){
    const parent = document.getElementById("section"); 
    console.log(parent); 

    var card = document.createElement("div"); 
    card.className = "card"; 
    card.style = "width: 18rem;";

    var cardBody = document.createElement("div"); 
    cardBody.className = "card-body"; 


    var hFive = document.createElement("h5"); 
    hFive.className = "card-title"; 
    hFive.innerHTML = "Card Title"; 

    var hSix = document.createElement("h6"); 
    hSix.className = "card-subtitle mb-2 text-muted"
    hSix.innerHTML = "Card Subtitle"

    var paragraph = document.createElement("p"); 
    paragraph.className = "card-text"; 
    paragraph.innerText = "Some quick example text to build on the card title and make up the bulk of the card's content."

    var linkOne = document.createElement("a"); 
    linkOne.className = "card-link";
    linkOne.href = "#"; 
    linkOne.innerText = "Card Link"; 

    var linkTwo = document.createElement("a"); 
    linkTwo.className = "card-link";
    linkTwo.href = "#"; 
    linkTwo.innerText = "Card Link"; 

    parent.appendChild(card); 
    card.appendChild(cardBody);
    cardBody.appendChild(hFive); 
    cardBody.appendChild(hSix); 
    cardBody.appendChild(paragraph); 
    cardBody.appendChild(linkOne); 
    cardBody.appendChild(linkTwo); 
    

}
