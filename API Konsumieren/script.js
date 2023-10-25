document.getElementById("Load").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
        result.json().then((data) => {
            getHTMLForTodos(data);
        })
    })
})

function getHTMLForTodos(data) {
    let html = "<ul>";
    data.forEach(todo => {
        html += "<li>" + todo.title + "</li>";
    });
    html += "</ul>";
    document.getElementById("content").innerHTML = html;
}
//commit