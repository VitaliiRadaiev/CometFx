// ==  slider ==========================================================================
{
	let slider = document.querySelector('.aside-slider');
	if(slider) {
			let mySwiper = new Swiper(slider.querySelector('.swiper-container'), {
			slidesPerView:1,
			autoHeight: true,
			loop: true,
			speed: 600,
			// autoplay: {
			//   delay: 3000,
			// },
			pagination: {
			    el: slider.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			})
	}
}
// == and  slider ==========================================================================