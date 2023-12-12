const loadData = () => {

    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}

const fillTable = (data) => {
    let Icon = "";

    data.forEach(element => {
        Icon = "<div class= 'TeamImg' style=\"background-image: url('" + element.teamIconUrl + "');\"></div>";

        document.getElementById("rectangle").innerHTML += Icon;
    });




}

loadData();