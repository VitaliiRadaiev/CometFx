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
			//   delay: 8000,
			// },
			pagination: {
			    el: slider.querySelector('.swiper-pagination'),
			    clickable: true,
			  },
			on: {
			  slideChange: function () {
			    //$(".aside__inner").getNiceScroll().resize();

			  },
			}  
			});


			slider.querySelectorAll('.swiper-slide').forEach((item) => {
				let height = item.clientHeight;
				let text = item.querySelector('.aside-slider__read-all').dataset.readall;
				let text2 = item.querySelector('.aside-slider__read-all').dataset.close;
				
				
				item.style.maxHeight = '350px';
				slider.querySelector('.swiper-wrapper').style.height = 'auto';
				let btn = item.querySelector('.aside-slider__read-all');
				btn.addEventListener('click', function() {
					if(item.classList.contains('is-open')) { 
						
						item.style.maxHeight = '350px';
						item.classList.remove('is-open');
						btn.innerText = text;
						slider.querySelector('.swiper-wrapper').style.height = 'auto';
					} else {
						if(height < 350) {
							let height2 = item.clientHeight;
							
							console.log(height);
							console.log(height2);
							item.style.maxHeight = (height2 + 40) + 'px';
							item.classList.add('is-open');
							slider.querySelector('.swiper-wrapper').style.height = 'auto';
							btn.innerText = text2;
						} else {
							
							item.style.maxHeight = (height + 40) + 'px';
							item.classList.add('is-open');
							slider.querySelector('.swiper-wrapper').style.height = 'auto';
							btn.innerText = text2;
						}
					}
				})

			})	
	}
}
// == and  slider ==========================================================================