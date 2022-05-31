let login = document.getElementById("login");


login.addEventListener("click", function(event){

    event.preventDefault();

    const username = document.getElementById("username").value;

    const password = document.getElementById("password").value;

    let data = new FormData();

    data.append('username', username);

    data.append('password', password);

    let url = 'http://localhost/myphpprojects/BackEnd-Brisk/apis/login.php';

    axios({
   
        method: 'POST',
   
        url: url,
   
        data:data,
   
    })

    .then(function (response) {
   
        let result = response.data;
   
        let message = result.succeed;

        let is_admin= result.is_admin;
   
        if(message === "User logged in successfuly"){
            
            if(is_admin === "0" )

             window.location.href = "http://localhost/myphpprojects/FrontEnd-Brisk/";
     
         else
                   
              window.location.href = "http://localhost/myphpprojects/FrontEnd-Brisk/admin";
        
          
            
        }



});});
