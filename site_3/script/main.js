
//var linkq = document.getElementById("linkquemsomos");
//linkq.onclick = showMessage;

//var cel = document.getElementById("contato");
//cel.onclick = showMessage_2;

var formNews = document.getElementById("formNovidades");
formNews.onsubmit = validateNewsletter;

var txtNomeNews = document.getElementById("inputNome");
var txtEmailNews = document.getElementById("inputEmail");
txtNomeNews.onchange = clearAlert;
txtEmailNews.onchange = clearAlert;


function showMessage() {
    alert("Site em Construção...");
}
//function showMessage_2(){
///    alert("Ligue agora (51) 9999-6666");
//}
function validateNewsletter() {
    var txtNome = document.getElementById("inputNome");
    var txtEmail = document.getElementById("inputEmail")

    if (txtNome.value == "" || txtEmail.value == "") {
        var div = document.getElementById("formNovidadesAlert");
        div.style.display = "block";

        return false;
    }
    return true;
}
function clearAlert() {
    var div = document.getElementById("formNovidadesAlert");
    div.style.display = "none";
}
