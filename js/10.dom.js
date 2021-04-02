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
*/
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