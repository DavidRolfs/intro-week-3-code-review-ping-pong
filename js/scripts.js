//User interface logic

function counter(countTo, countBy, wordOne, wordTwo, start){
  var array = []
  list = []
  for(var i = 0; i<= countTo; i += countBy){
    if(i === 0){
      array[i] = start;
    }else if(i % 15 === 0 && i > 0){
      array[i] = (wordOne + wordTwo);
    }else if(i % 5 === 0 && i > 0){
      array[i] = (wordTwo);
    }else if(i % 3 === 0 && i > 0){
      array[i] = (wordOne);
    }else{
      array[i] = i
    }
  }
  return array;
};


// Business logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();
    var countBy = parseInt($("#countBy").val())
    var result = counter(countTo, countBy, "Ping", "Pong", "");


    $("#results").show()
    $("ul").empty();
    result.forEach(function(listItem){
      return($("ul").append("<li>" + listItem + "</li>"));
    });
  });
});
