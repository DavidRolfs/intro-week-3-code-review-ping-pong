var array = []

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
  return array
}










$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();

    var result = counter(countTo);

    $("#results").text(result);
  });
});
