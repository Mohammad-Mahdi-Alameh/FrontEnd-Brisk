let button = document.getElementById("signup");

button.addEventListener("click", function(event){

    event.preventDefault();

    const first_name = document.getElementById("first_name").value;

    const last_name = document.getElementById("last_name").value;

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    const dob = ""+document.getElementById("day").value+"-"+document.getElementById("month").value+"-"+document.getElementById("year").value;

    const country = document.getElementById("country").value;

    const city = document.getElementById("city").value;

    const phone = document.getElementById("phone").value;

    const radioButtons = document.querySelectorAll('input[name="gender"]');

    let selectedGender;

    for (const radioButton of radioButtons) {

        if (radioButton.checked) {

            selectedGender = radioButton.value;

            break;

        }

    }

    let data = new FormData();

    data.append('first_name', first_name);

    data.append('last_name', last_name);

    data.append('username', username);

    data.append('password', password);

    data.append('dob', dob);

    data.append('country', country);

    data.append('city', city);

    data.append('phone', phone);

    data.append('gender', selectedGender);

    let url = 'http://localhost/myphpprojects/BackEnd-Brisk/apis/signup.php';

    axios({
   
        method: 'POST',
   
        url: url,
   
        data:data,
   
    })
   
    .then(function (response) {
   
        let result = response.data;
   
        let message = result.success;
   
        if(message === true){

            window.location.href = "http://localhost/myphpprojects/FrontEnd-Brisk";   

    }
   
});


});

function setCookie(cname,cvalue,exdays) {
    
    const d = new Date();
    
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    
    let expires = "expires=" + d.toUTCString();
    
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    
  }