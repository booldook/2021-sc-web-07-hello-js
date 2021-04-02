/* var document = {
	html: {
		head: {
			innerHTML: '<...>'
		},
		body: {
			innerHTML: '<...>'
		}
	}
} 
console.log(document.body.innerHTML);
document.body.innerHTML += '<h1>BOOLDOOK</h1>';
*/

var wrapper = document.getElementById('wrapper');
var appendTxt = document.getElementById('appendTxt');

function make() {
	wrapper.innerHTML = wrapper.innerHTML + '<p>'+appendTxt.value+'</p>';
	init();
}

function removeAll() {
	wrapper.innerHTML = '';
	init();
}

function removeLine() {
	// console.log( wrapper.getElementsByTagName('p').length );
	// console.log( wrapper.getElementsByTagName('p')[1] );
	var lastIdx = wrapper.getElementsByTagName('p').length - 1;
	wrapper.getElementsByTagName('p')[lastIdx].remove();
	init();
}

function init() {
	appendTxt.value = '';
	appendTxt.focus();
}
