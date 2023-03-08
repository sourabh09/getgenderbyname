function getData(){

    $.ajax({ 
    type: 'GET', 
    url: 'quotes.json',
    dataType: 'json',
    success: function (data) { 

        var totalNumberQuotes = data.length-1;
     
        var randomNumber = Math.floor(Math.random() * (totalNumberQuotes - 0 + 1) + 0);

        console.log(data[randomNumber].quote);

        $(".quote-line").text("“ "+data[randomNumber].quote+" ”");



        }        
  });

 };