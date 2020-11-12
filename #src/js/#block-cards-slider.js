{
	const slider = document.querySelector('.block-cards.swiper-container');
	let mySwiper;

	if (slider) {
		function mobileSlider() {
			if(document.documentElement.clientWidth <= 991 && slider.dataset.mobile == 'false') {
				mySwiper = new Swiper(slider, {
					slidesPerView: 'auto',
					spaceBetween: 15,
					centeredSlides: true,
					on: {
					  init: function () {
					    console.log('swiper initialized');
					  },
					},
				});

				slider.dataset.mobile = 'true';

				mySwiper.slideNext(0);
			}

			if(document.documentElement.clientWidth > 991) {
				slider.dataset.mobile = 'false';

				if(slider.classList.contains('swiper-container-initialized')) {
					mySwiper.destroy();
				}
			}
		}

		mobileSlider();

		window.addEventListener('resize', () => {
			mobileSlider();
		})
	}

}