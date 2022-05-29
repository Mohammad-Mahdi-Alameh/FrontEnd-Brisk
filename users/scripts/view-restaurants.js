////
window.onload=viewRestaurants;
////

function viewRestaurants() {
    // Creating Our XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Making our connection
    var url = 'http://localhost/myphpprojects/BackEnd-Brisk/api\'s/view_restaurants.php';

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {


        if (this.readyState == 4 && this.status == 200) {
            var object = JSON.parse(this.response);

            var string="";

            object.forEach(element=>{
                string += '<tr>' + '<td>' + element.restaurant_id + '</td>' + '<td>' + element.trade_name + '</td>' + '<td>' +
                    element.working_hours + '</td>' +'<td>' + element.dining_room_capacity + '</td>' +'<td>' + element.drivethrough_availabilty
                    + '</td>' +'<td>' + element.delivery_availabilty + '</td>' +
                    '<td>' + element.reservation_availabilty + '</td>' +'<td>' + element.big_chef + '</td>' +'<td>' + element.support_all_diets+ '</td>'+'</tr>'
            });
            document.getElementById("todos").innerHTML = string;
        }
    }
    xhr.send();
}



