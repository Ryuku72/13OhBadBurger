 function check_value(val, mycheckbox) {
    const imgEL = document.getElementById("img"+val);
        if (mycheckbox.checked === true){
            imgEL.classList.remove("imgClear");
        } else {
            imgEL.classList.add("imgClear");
        }
        }

// function decimalFix(num){   
//     let value = num; 
//     return value.toFixed(2)
// }

// const form = document.forms[0];

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
//   const data = new FormData(form);
//   form.addEventListener("formdata", event => {
//     // event.formData grabs the object

//     const data = event.formData
//     const entries = [...data.entries()];
//     console.log(entries);

//     const values = [...data.values()];
//   console.log(values);
//   });
// });


$(document).ready(function() {

    // $(".addBurgerBtn").on("click", function(){
    //     const sauce = $('#inputSauce option:selected').text();
    //     const sp = $('#inputSauce option:selected').val();
    //     const patty = $('#inputPatty option:selected').text();
    //     const pp= $('#inputPatty option:selected').val();
        
        
    //     console.log(sauce);
    //     console.log(sp);
    //     console.log(patty);
    //     console.log(pp);
    // })

    $(".newBurger").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

            var toppings = [];
            $.each($("input[name='topping']:checked"), function(){
                toppings.push($(this).val());
            });
            console.log("My toppings are: " + toppings.join(", "));
    
        const newBurger = {
          
            title: $("#BurgerID").val().trim(),
            Sauce: $('#inputSauce option:selected').val(),
            Patty: $('#inputPatty option:selected').val(),
            Topping: toppings
        };
        console.log(newBurger)
    
        // Send the POST request.
        $.ajax("/newburger", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
          }
        );
        location.reload();
      });


 
    
    $("#inputPatty").click(function(){
        let burgerID = $(this).val();
        $("#img"+burgerID).addClass("imgClear")
    });

    $("#inputPatty").change(function(){
        let burgerID = $(this).val();
        if ($("#img"+burgerID).attr("class") === "imgClear"){
            $("#img"+burgerID).removeClass("imgClear")
        }else{
            $("#img"+burgerID).addClass("imgClear")
        }
    });
    
    
    $("#inputSauce").click(function(){
        let sauceID = $(this).val();
        $("#img"+sauceID).addClass("imgClear")
    });

    $("#inputSauce").change(function(){
        let sauceID = $(this).val();
        if ($("#img"+sauceID).attr("class") === "imgClear"){
            $("#img"+sauceID).removeClass("imgClear")
        }else{
            $("#img"+sauceID).addClass("imgClear")
        }

  



    });

//     $(".change-sleep").on("click", function(event) {
//         var id = $(this).data("id");
//         var newSleep = $(this).data("newsleep");
    
//         var newSleepState = {
//           sleepy: newSleep
//         };
    
//         // Send the PUT request.
//         $.ajax("/api/cats/" + id, {
//           type: "PUT",
//           data: newSleepState
//         }).then(
//           function() {
//             console.log("changed sleep to", newSleep);
//             // Reload the page to get the updated list
//             location.reload();
//           }
//         );
//       });
    
  
    
//       $(".delete-cat").on("click", function(event) {
//         var id = $(this).data("id");
    
//         // Send the DELETE request.
//         $.ajax("/api/cats/" + id, {
//           type: "DELETE"
//         }).then(
//           function() {
//             console.log("deleted cat", id);
//             // Reload the page to get the updated list
//             location.reload();
//           }
//         );
//       });

   });
