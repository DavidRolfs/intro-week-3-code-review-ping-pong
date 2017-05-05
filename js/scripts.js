var array = []
var list = []

function counter(countTo){
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



$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();

    var result = counter(countTo);
    $("ul").empty()
    $("ul").append(list);
  });
});
