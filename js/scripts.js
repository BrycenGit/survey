$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#person1").val()
    const dob = $("#born").val();
    const food = $("input:radio[name=food]:checked").val();

    $("#person").text(person1Input);
    $("#dob").text(dob);
    $("#favoriteFood").text(food);
    $("#result").show();
  });
});  
