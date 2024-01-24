document.getElementById("Load").addEventListener("click", function() {
    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        })
    })
})

function fillTable(data) {
    document.getElementById("output").innerHTML = data;
    let html = "";

    data.forEach(element => {
        html += "<div>" + element.teamName + "</div>"
    });
    document.getElementById("output").innerHTML = html;
}