// Animation d'apparition du menu réduit.
$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// Fait apparaitre une barre noir à la nav barre une fois scroll
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

// Animation de disparition de l'alerte 
$('.close-btn').click(function(){
    $('.alerte').removeClass("show");
    $('.alerte').addClass("hide");
});