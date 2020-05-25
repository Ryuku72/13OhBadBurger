//changes images after clicking on the checkboxes
function check_value(val, mycheckbox) {
    const imgEL = document.getElementById("img" + val);
    if (mycheckbox.checked === true) {
        imgEL.classList.remove("imgClear");
    } else {
        imgEL.classList.add("imgClear");
    }
}

$(document).ready(function () {

    //update burgerbuilder when you click burger dropdown

    $("#inputPatty").click(function () {
        let burgerID = $(this).val();
        $("#img" + burgerID).addClass("imgClear")
    });

    $("#inputPatty").change(function () {
        let burgerID = $(this).val();
        if ($("#img" + burgerID).attr("class") === "imgClear") {
            $("#img" + burgerID).removeClass("imgClear")
        } else {
            $("#img" + burgerID).addClass("imgClear")
        }
    });

    //update burgerbuilder when you click sauce dropdown

    $("#inputSauce").click(function () {
        let sauceID = $(this).val();
        $("#img" + sauceID).addClass("imgClear")
    });

    $("#inputSauce").change(function () {
        let sauceID = $(this).val();
        if ($("#img" + sauceID).attr("class") === "imgClear") {
            $("#img" + sauceID).removeClass("imgClear")
        } else {
            $("#img" + sauceID).addClass("imgClear")
        }

    });

    //Create burger

    $(".newBurger").on("submit", function (event) {
        event.preventDefault();
        event.stopPropagation(); //stop from being sent 3 times to server

       
       if ($(".topping:checked").length == 0) {
         alert("NO TOPPINGS!!! \nPlease select at least one TOPPING")
       
       }else{
        var toppings = [];
        $.each($("input[name='topping']:checked"), function () {
            toppings.push($(this).val());
  
       
        //console.log("My toppings are: " + toppings.join(", "));

        const newBurger = {
            title: $("#BurgerID").val().trim(),
            Sauce: $('#inputSauce option:selected').val(),
            Patty: $('#inputPatty option:selected').val(),
            Topping: toppings
        };

        function runAjax () {
           // Send the POST request.
        $.ajax("/newburger", {
          type: "POST",
          data: newBurger
      }).then(
          function () {
      // Reload the page to get the updated list from server(true) or cache (false)
     location.reload(true);
          })

        }
        //console.log(newBurger)

        
        if ($("#BurgerID").val() === ""){
          alert("YOUR NAME PLEASE \nPlease insert your BURGER NAME!!!") 
        }else if( $('#inputSauce option:selected').val() === "0") {
          alert("GOT TO HAVE SAUCE!!! \nPlease choose some SAUCE!!")
        } else if ($('#inputPatty option:selected').val() === "0") {
          alert("BURGER WITH NO PATTY???? \nPlease choose a PATTY!!")
        } else {
          runAjax()
        }
      });
    }
    });


    // Purchase UPDATE

    $(".purchaseBtn").on("click",function(event){
        event.preventDefault();
        //
          const burgerID = $(event.target).data("id")
      
          const sold = {
            id: burgerID,
          };

          //console.log(sold)
      
          // Send the PUT request.
          $.ajax("/burgers/" + burgerID, {
            type: "PUT",
            data: sold
          }).then(
            function() {
              //console.log("Bye Bye burger", sold);
              // Reload the page to get the updated list
              location.reload();
            }
          );
        });


          $(".delBtn").on("click", function(event) {
            const burgerID = $(event.target).data("id")

            // Send the DELETE request.
            $.ajax("/burgers/" + burgerID, {
              type: "DELETE"
            }).then(
              function() {
                //console.log("deleted burger", burgerID);
                // Reload the page to get the updated list
                location.reload();
              }
            );
          });

    });















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



//search function
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


//change the values inputted into price

// const priceValue = $(".Price");

// priceValue.each(function(){
//     const priceValue = $(this).html();
// const priceFix = parseFloat(priceValue).toFixed(2)
// console.log(priceFix)
// $(".Price").append(priceFix)
// })

//  let updateSpice = document.getElementsByClassName("SpiceLvL").value;
//  console.log("----");
//  console.log(updateSpice);
//  let spiceText = document.createTextNode(updateSpice);
//  console.log("-----");
//  console.log(spiceText);

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