function getData() {
    var url = "";

    var name = $("#name").val();
    if(name==""){
        alert("Enter name first!")
        return false
    }
    $(".dummy").css("display","block");
      $(".info").html("");
    $.ajax({

        url: 'https://api.genderize.io/?name=' + name,

        success: function(data) {

            console.log(data);

          

            if (data.gender == "male") {

                url = "male.PNG"

            } else {
                url = "female.PNG"
            }

            var accuracy = data.probability * 100 + "%";

            $(".info").html("<div class='main'>" + "Name : " + data.name + "<br>" + "<img id='genderimg' src='" + url + "'>" + "<br>"

                +
                "Gender : " + data.gender + "<br>" + "Accuracy : " + accuracy + "</div>")
            }

    })
             $(".dummy").css("display","none");
            $(".info").fadeIn();
            $(".extra").text("");

}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
