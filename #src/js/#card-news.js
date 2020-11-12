function cardNewsHandler(){
	let cards = document.querySelectorAll('.card-news');
	if(cards.length) {
		cards.forEach(item => {
			let text = item.querySelector('.card-news__text');
			if(text.innerText.length > 162) {
				text.innerText = [...text.innerText].slice(0, 162).join('') + '...';
			}
		})
	}
};

cardNewsHandler();