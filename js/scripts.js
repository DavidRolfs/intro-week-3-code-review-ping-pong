var array = []

function counter(countTo){
  for(var i = 1; i<= countTo; i++){
    if(i % 15 === 0){
      array.push("<li>"+"Ping-Pong"+"</li>");
    }else if(i % 5 === 0){
      array.push("<li>"+"Pong"+"</li>");
    }else if(i % 3 === 0){
      array.push("<li>"+"Ping"+"</li>");
    }else{
      array.push("<li>"+i+"</li>")
    }
  }
  return array
}










$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();

    var result = counter(countTo);

    $("ul").append(result);
  });
});
