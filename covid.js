var listOfStates; 

window.onload = function(){
    getAllStatesCovid(); 
}

async function getAllStatesCovid() {
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
        // var province = element.province;
        // var confirmedCases = element.confirmed;
        // var deaths = element.deaths;
        // loadCovidStateCard(province, confirmedCases, deaths);
    });
    listOfStates = provinces;
    console.log(listOfStates);
}

function loadCovidStateCard(province, confirmedCases, deaths){
    const parent = document.getElementById("states"); 
    
    var card = document.createElement("div"); 
    card.className = "card"; 
    card.style = "width: 18rem;";

    var cardBody = document.createElement("div"); 
    cardBody.className = "card-body"; 


    var hFive = document.createElement("h5"); 
    hFive.className = "card-title"; 
    hFive.innerHTML = province; 

    var hSix = document.createElement("h6"); 
    hSix.className = "card-subtitle mb-2 text-muted"
    hSix.innerHTML = "Confirmed Cases: " + confirmedCases;

    var paragraph = document.createElement("p"); 
    paragraph.className = "card-text"; 
    paragraph.innerText = "Deaths Reported: " + deaths;

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

//easy pagination
var current_page = 1;
var records_per_page = 5;

var objJson = [
    { adName: "AdName 1"},
    { adName: "AdName 2"},
    { adName: "AdName 3"},
    { adName: "AdName 4"},
    { adName: "AdName 5"},
    { adName: "AdName 6"},
    { adName: "AdName 7"},
    { adName: "AdName 8"},
    { adName: "AdName 9"},
    { adName: "AdName 10"}
]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    //console.log(numPages())
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}
    
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    //var listing_table = document.getElementById("listingTable");
    var listing_table = document.getElementById("states");
    
    var page_span = document.getElementById("page");
 
    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    console.log(listOfStates);

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < listOfStates.length; i++) {
        listing_table.innerHTML += loadCovidStateCard(listOfStates[i].province, listOfStates[i].confirmed, listOfStates[i].deaths);
    }
    page_span.innerHTML = page + "/" + numPages();

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(listOfStates.length / records_per_page);
}

// window.onload = function() {
//     changePage(1);
// };
