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
var thumb = document.querySelectorAll('.list > img');
var stage = document.querySelector('.img-wrap > img');

function onThumbClick() {
	stage.src = this.src;
	for(var i=0; i<thumb.length; i++) {
		thumb[i].parentNode.classList.remove('active');
	}
	this.parentNode.classList.add('active');
}

for(var i=0; i<thumb.length; i++) {
	thumb[i].addEventListener('click', onThumbClick);
}


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