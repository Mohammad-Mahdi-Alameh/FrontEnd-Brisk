document.getElementById("login").addEventListener("onclick",login);

function viewRestaurants() {
    // Creating Our XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Making our connection
    var url = 'http://localhost/myphpprojects/BackEnd-Brisk/api\'s/login.php';

    xhr.open("POST", url, true);

    xhr.onreadystatechange = function () {


        if (this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(this.response);

            var string="";