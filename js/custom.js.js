
// // Tabbed Menu
// function openMenu(evt, menuName) {
//   var i, x, tablinks;
//   x = document.getElementsByClassName("menu");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   // tablinks = document.getElementsByClassName("tablink");
//   // for (i = 0; i < x.length; i++) {
//   //   tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
//   // }
//   document.getElementById(menuName).style.display = "block";
//   // evt.currentTarget.firstElementChild.className += " w3-dark-grey";
// }
// // document.getElementById("myLink").click();


$(document).ready(function () {



    $(".close-sign").click(function (e) {
        $(".food-men").fadeOut(1000);
    })


    $(".main-btn").click(function(){
       
        $(".food-men").removeClass("hidden-display");
        
    })

    $("#khoshmaze ").hover(function (e) {
        $("#khoshmaze li a").click(function () {
            var messagefood = $(this).text();
            var finalfoodmes = `سفارش شما ${messagefood}` + " " + "ثبت شد لطفا کمی منتظر بمانید";
            $(".foodorder p").text(finalfoodmes);
        })
    })


    $("form").ready(function(e){
        $(".sabt button").click(function(f){
            f.reventDefault();
        })

    })


    $(".close-sign").click(function(){
        $(".contact-us").fadeOut(1000);
    })

     



    $("#tamas-bama").click(function(){
       
        $(".contact-us").removeClass("hidden-display");
        
    })













})