$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
});

// / when #reserveButton is clicked it will open the #reserveModal
$(function(){
    $('#reserveButton').click(function(){
       $('#reserveModal').modal('show');
       //alert('hello')
    });
});

// When loginBotton is clicked will open the #loginModal (signIn)
$(function(){
    $('#loginButton').click(function(){
       $('#loginModal').modal('show');
       //alert('hello')
    });
});