/* 
DOM안에서 element(요소)를 접근하기

// parentNode
document.querySelector('.bt-parent').addEventListener('click', function() {
	console.log( document.querySelectorAll('.menu')[0].parentNode );
})

document.querySelectorAll('.menu')[1].addEventListener('click', function() {
	console.log( this );
	console.log( this.parentNode );
	console.log( this.parentNode.parentNode );
	console.log( this.parentNode.parentNode.parentNode );
	console.log( this.parentNode.parentNode.parentNode.parentNode );
})

// childNodes
document.querySelector('.wrapper').addEventListener('click', function() {
	console.log( this );
	console.log( this.childNodes );
	console.log( this.childNodes[5] );
	console.log( this.childNodes[5].childNodes[7] );
})
document.querySelector('.wrapper').addEventListener('click', function() {
	console.log( this.childNodes )
	console.log( this.children[2].children[2] )
	console.log( this.firstChild )	// 써먹기 힘들다.
	console.log( this.lastChild )		// 써먹기 힘들다.
})
*/

document.querySelectorAll('.menu')[1].addEventListener('click', function(){
	console.log(this);
	console.log(this.previousSibling.previousSibling);
	console.log(this.nextSibling.nextSibling);
	console.log(this.parentNode.children[0]);
	console.log(this.parentNode.children[2]);
})


