//User interface logic

function counter(countTo, wordOne, wordTwo){
  var array = []
  list = []
  for(var i = 1; i<= countTo; i++){
    if(i % 15 === 0){
      array[i] = (wordOne + wordTwo);
    }else if(i % 5 === 0){
      array[i] = (wordTwo);
    }else if(i % 3 === 0){
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
    var result = counter(countTo, "Ping", "Pong");

    $("ul").empty();
    result.forEach(function(listItem){
      return($("ul").append("<li>" + listItem + "</li>"));
    });
  });
});
