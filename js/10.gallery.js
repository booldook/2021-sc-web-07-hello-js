/**********************************
DOM: Document Object Model
document.getElementById('booldook');
document.getElementsByTagName('div');
document.getElementsByClassName('list-wrap');
*/
// var el = document.getElementsByClassName('list')[1].getElementsByClassName('img')[0]
// var el = document.querySelector('.list-wrap > .list:nth-child(2) > img');
// var el = document.querySelectorAll('.list');
// console.log(el);

/**********************************
Event
// 1번
// document.querySelector('.title').addEventListener('click', function() {
// 	alert('Hi~');
// });

// 2번
function greeting() {
	alert('Hi~');
}

// 3번
document.querySelector('.title').addEventListener('click', greeting);
*/

/*********************
Gallery

*/

/*
// Javascript
var thumb = document.querySelectorAll('.list > img');
var stage = document.querySelector('.img-wrap > img');

for(var i=0; i<thumb.length; i++) {
	thumb[i].addEventListener('click', function() {
		stage.src = this.src;
		for(var i=0; i<thumb.length; i++) {
			thumb[i].parentNode.classList.remove('active');
		}
		this.parentNode.classList.add('active');
	});
}
*/

$('.list > img').on('click', function(){
	$('.img-wrap > img').attr('src', $(this).attr('src'));
	$('.list').removeClass('active')
	$(this).parent().addClass('active')
})


// var listWrap = document.querySelector('.list-wrap')
// console.log(listWrap.classList);
// console.log(listWrap.classList[0]);
// console.log(listWrap.classList[1]);
// console.log(listWrap.classList.length);
// console.log(listWrap.classList.value);
// listWrap.classList.add('active');
// console.log(listWrap.classList);
// listWrap.classList.remove('active');
// console.log(listWrap.classList);