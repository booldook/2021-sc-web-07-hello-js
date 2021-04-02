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
	appendTxt.value = '';
	appendTxt.focus();
}

function remove() {
	wrapper.innerHTML = '';
	appendTxt.value = '';
	appendTxt.focus();
}
