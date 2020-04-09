function getData() {
    var url = "";

    var name = $("#name").val();
    if(name==""){
        alert("Enter name first!")
        return false
    }

    $.ajax({

        url: 'https://api.genderize.io/?name=' + name,

        success: function(data) {

            console.log(data);

            $(".info").html("");

            if (data.gender == "male") {

                url = "male.png"

            } else {
                url = "female.png"
            }

            var accuracy = data.probability * 100 + "%";

            $(".info").html("<div class='main'>" + "Name : " + data.name + "<br>" + "<img id='genderimg' src='" + url + "'>" + "<br>"

                +
                "Gender : " + data.gender + "<br>" + "Accuracy : " + accuracy + "</div>")
            }

    })

            $(".info").css("display","block");
            $(".extra").text("");

}

function AvoidSpace(event) {
    var k = event ? event.which : window.event.keyCode;
    if (k == 32) return false;
}
