window.onload=checkIfLoggedIn;
let login=document.getElementById("login");

let signup=document.getElementById("signup");

let edit=document.getElementById("edit");

function checkIfLoggedIn() {
    
    if(getCookie("user_id")!== null){

        signup.style.visibility="hidden";

        login.innerText="SignOut";
    }}





let view_restaurants=document.getElementById('view_restaurants');

view_restaurants.addEventListener("click", function(event){

    event.preventDefault();

    window.location.href = "http://localhost/myphpprojects/FrontEnd-Brisk/users/pages/view-restaurants.html";});



    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
      }