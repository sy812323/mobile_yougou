$(function(){
    $("aside li").click(function(event){
        if(event.currentTarget==this){
            $("aside li").removeClass("hover-li");
            $(this).addClass("hover-li");
        }
    })
    $(".header-right").toggle(function(){
        $(".menu").css("display","block");
    },function(){
        $(".menu").css("display","none");
    });
    $(".search-push").focus(function(){
        window.location.href="search.html";
    });
});