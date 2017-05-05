function counter(countTo){
  for(var i = 1; i<= countTo; i++){
    console.log(i);
  }
}











$(document).ready(function(){
  $("form#form").submit(function(event){
    event.preventDefault()

    var countTo = $("#countTo").val();

    counter(countTo);
  });
});
