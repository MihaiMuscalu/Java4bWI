const loadData = () => {

    fetch("https://api.openligadb.de/getbltable/bl1/2022").then((result) => {
        result.json().then((data) => {
            fillTable(data);
        })
    })
}



const fillTable = (data) => {
    let Icon = ""
    let Teams = "";
    let Matches = "";
    let Won = "";
    let GD = "";
    let Points = "";
    for (let i = 0; i < 10; i++) {
        Icon = "<td><img class='Icon' src='" + data[i].teamIconUrl + "'></img></td>";
        Teams = "<td class='Teams'>" + data[i].teamName + "</td>";
        Matches = "<td class='Matches'>" + data[i].matches + "</td>";
        Won = "<td class='Won'>" + data[i].won + "</td>";
        GD = "<td class='GD'>" + data[i].goalDiff + "</td>";
        Points = "<td class='Points'>" + data[i].points + "</td>";
        document.getElementById("row").innerHTML += "<tr>" + Icon + Teams + Matches + Won + GD + Points + "</td>";

    };


}

loadData();