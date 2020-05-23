 function check_value(val, mycheckbox) {
    const imgEL = document.getElementById("img"+val);
    console.log(imgEL)
        if (mycheckbox.checked === true){
            imgEL.classList.remove("imgClear");
        } else {
            imgEL.classList.add("imgClear");
        }
        }


$(document).ready(function() {
    // let inputVal = $("#inputSauce :selected").val()
    $("#inputBurger").click(function(){
        let burgerID = $(this).val();
        $("#img"+burgerID).addClass("imgClear")
    });

    $("#inputBurger").change(function(){
        console.log($(this).val());
        let burgerID = $(this).val();
        if ($("#img"+burgerID).attr("class") === "imgClear"){
            $("#img"+burgerID).removeClass("imgClear")
        }else{
            $("#img"+burgerID).addClass("imgClear")
        }
    });
    
    
    $("#inputSauce").click(function(){
        let sauceID = $(this).val();
        console.log(sauceID);
        $("#img"+sauceID).addClass("imgClear")
    });

    $("#inputSauce").change(function(){
        console.log($(this).val());
        let sauceID = $(this).val();
        if ($("#img"+sauceID).attr("class") === "imgClear"){
            $("#img"+sauceID).removeClass("imgClear")
        }else{
            $("#img"+sauceID).addClass("imgClear")
        }
    });

    // Make sure we wait to attach our handlers until the DOM is fully loaded.

    // $(".burger-sale").on("click", function(event) {
    //   let id = $(this).data("BurgerID");
    //   let burgerSold = $(this).data("newsleep");
  
    //   var newSale = {
    //     checkOut: burgerSold,
    //     purchased: 0
    //   };
  
    //   // Send the PUT request.
    //   $.ajax("/api/burger/" + id, {
    //     type: "PUT",
    //     data: newSale
    //   }).then(
    //     function() {
    //       console.log("changed checkOut to", newSale);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $(".create-form").on("submit", function(event) {
    //   // Make sure to preventDefault on a submit event.
    //   event.preventDefault();
  
    //   var newCat = {
    //     name: $("#ca").val().trim(),
    //     sleepy: $("[name=sleepy]:checked").val().trim()
    //   };
  
    //   // Send the POST request.
    //   $.ajax("/api/cats", {
    //     type: "POST",
    //     data: newCat
    //   }).then(
    //     function() {
    //       console.log("created new cat");
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  
    // $(".delete-cat").on("click", function(event) {
    //   var id = $(this).data("id");
  
    //   // Send the DELETE request.
    //   $.ajax("/api/cats/" + id, {
    //     type: "DELETE"
    //   }).then(
    //     function() {
    //       console.log("deleted cat", id);
    //       // Reload the page to get the updated list
    //       location.reload();
    //     }
    //   );
    // });
  });
