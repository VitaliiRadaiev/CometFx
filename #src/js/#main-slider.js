// ==  slider ==========================================================================
{
	let slider = document.querySelector('.main-slider');
	let bgSliderData;
	if(slider) {
			let mySwiper;
			mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
			slidesPerView:1,
			speed: 600,
			autoplay: {
			  delay: 8000,
			},
			spaceBetween: 35,
			pagination: {
			    el: slider.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			 on: {
			 	slideChange: function() {
			 		if(mySwiper) {
			 			console.log(mySwiper.activeIndex)
			 			bgSliderData.slideTo(mySwiper.activeIndex)
			 		}
			 	}
			 } 
			})
	}

	let bgSlider = document.querySelector('.bg-slider');
	if(bgSlider) {
		bgSliderData = new Swiper(bgSlider.querySelector('.swiper-container'), {
		slidesPerView:1,
		speed: 600,
		effect: 'fade',
		})
	}
}
{
	let bgSlider = document.querySelector('.bg-slider-v2');
	if(bgSlider) {
		 $('.bg-slider-v2').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  infinite: false,
		  arrows: false,
		  fade: true,
		  asNavFor: '.main-slider-v2'
		});
		$('.main-slider-v2').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  asNavFor: '.bg-slider-v2',
		  dots: true,
		   arrows: false,
		   touchThreshold: 10,
		   infinite: false,
		   autoplay: true,
		   autoplaySpeed: 8000,

		});
	}
}

// == and  slider ========================================================================== 