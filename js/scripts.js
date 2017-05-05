//User interface logic

var list

function counter(countTo){
  var array = []
  list = []
  for(var i = 1; i<= countTo; i++){
    if(i % 15 === 0){
      array.push("Ping-Pong");
    }else if(i % 5 === 0){
      array.push("Pong");
    }else if(i % 3 === 0){
      array.push("Ping");
    }else{
      array.push(i)
    }
  }
  list = array.map(function(word){
    return("<li>"+word+"</li>");
  });
};


// Business logic
$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();
    counter(countTo);
    $("ul").empty();
    $("ul").append(list);
  });
});
