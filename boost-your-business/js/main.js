$(function(){

	$('.top-info__slider').slick({
		 infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1 ,
    autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  responsive: [
  {
  	breakpoint:1106,
  	settings: {
  		slidesToShow:1,
  		slidesToScroll: 1,
  	}
  },
  ]
});
$('.btn__menu').on('click',function(){
	$('.menu__list').slideToggle();
	});

});