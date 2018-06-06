$(document).ready(function() {
  $("#submit").click(function(event){
    event.preventDefault();
    var input = $("#input").val();
    console.log(input);
  })
})
