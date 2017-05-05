//User interface logic

function counter(countTo){
  var array = []
  list = []
  for(var i = 1; i<= countTo; i++){
    if(i % 15 === 0){
      array[i] = ("Ping-Pong");
    }else if(i % 5 === 0){
      array[i] = ("Pong");
    }else if(i % 3 === 0){
      array[i] = ("Ping");
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
    var result = counter(countTo);

    $("ul").empty();
    result.forEach(function(listItem){
      return($("ul").append("<li>" + listItem + "</li>"));
    });
  });
});
