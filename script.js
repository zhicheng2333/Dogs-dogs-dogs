function dogMe() {
    $.get(
        'https://dog.ceo/api/breeds/image/random/50',
        function (data) {
            showDogs(data.message);
        }
    );
}

$('button').click(function() {
    dogMe();    
});

/** DO NOT EDIT ABOVE THIS LINE **/

function showDogs(dogImages) {
   dogImages.forEach(function(dog){
    console.log(dog); 
    $("#dogs").append("<img src='" + dog +"'/>");
   
   });
}

