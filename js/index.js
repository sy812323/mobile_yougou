$(function(){
    var mySwiper = new Swiper ('.swiper-container', {
	    spaceBetween: 30,
		direction : 'horizontal',
		centeredSlides: true,
		autoplay: {
		delay: 2500,
		disableOnInteraction: false,
		},
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		}
  	})
});
$(function(){
    $(".content").scroll(function(){
        let temp = $(".content").scrollTop();
        // console.log(temp);
        if(Math.ceil(temp)>0){
            $("header").css({"background-color":"rgba(230, 1, 17, 0.8)","background-image":"none"});
			$(".back-top").css("display","block");
		}else{
            $("header").css({"background-color":"rgba(0, 0, 0, 0)","background-image":"url(img/toyy4.png) no-repeat"});
            $(".back-top").css("display","none");
        }
	});
	$(".push-on").focus(function(){
		window.location.href="search.html";
	})
	$(".back-top").click(function(){
		$(".content").animate({scrollTop:0},100);
	});
});