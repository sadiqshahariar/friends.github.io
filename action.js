$(document).ready(function(){
    $(window).scroll(function(){
         // header fixed only when window width greater than 991px
        if($(window).scrollTop()>=100){
            $("header").addClass("sticky")
        }
        else{
         $("header").removeClass("sticky")	
        }
    })

    $("header .navbar .navbar-nav .nav-link").click(function(){
        $("header .navbar .navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    })
})