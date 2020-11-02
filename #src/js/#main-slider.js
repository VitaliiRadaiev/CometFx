// ==  slider ==========================================================================
{
	let slider = document.querySelector('.main-slider');
	if(slider) {
			let mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
			slidesPerView:1,
			loop: true,
			speed: 600,
			// autoplay: {
			//   delay: 4000,
			// },
			spaceBetween: 35,
			pagination: {
			    el: slider.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			})
	}
}
// == and  slider ========================================================================== 