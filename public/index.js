
function getQuery(event) {


    if (event.keyCode == 13) {

        var query = document.getElementById("help-input").value
        document.getElementById("help-textarea").innerHTML += query + "&#13;&#10;"
    }
}   
