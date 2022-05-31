////
window.onload=viewRestaurants;
////

let m=document.getElementById("mm");

function viewRestaurants() {
    
   
    var url = 'http://localhost/myphpprojects/BackEnd-Brisk/apis/get_restaurants.php';

    axios({
   
        method: 'GET',
   
        url: url,
   
   
    })

    .then(function (response) {
   
        let result = response.data;

        console.log(result);
        
        var string="";

        result.forEach(element=>{
                string += '<ul>'+ '<li>' + element.trade_name + '</li>' + '<li>' +
                    element.working_hours + '</li>' +'<li>' + element.dining_room_capacity + '</li>'+'<li>' + element.phone + '</li>' +'<li>' + element.drivethrough_availabilty
                    + '</li>' +'<li>' + element.delivery_availabilty + '</li>' +
                    '<li>' + element.reservation_availabilty + '</li>' +'<li>' + element.address + '</li>' +'<li>' + element.support_all_diets+ '</li>'+'</ul>'
    });
m.innerHTML=string; 


});

            
}
      



