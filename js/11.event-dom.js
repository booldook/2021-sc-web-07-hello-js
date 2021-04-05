// 변수의 범위(중요!)
var a = 10; // 전역(global)변수
var winWidth, winHeight; // undefined

function area() {
	var a = 20; // 지역(local)변수
	console.log('area():', a) // 20
}
function area2() {
	console.log('area2():', a) // 10
}
area();
area2();
console.log('root:', a) // 10



// 옛날선택자 - 알고는 있되 쓰지 말자
// document.getElementById('아이디')
// document.getElementsByTagName('태그명')
// document.getElementsByClassName('클래스네임')
// document.getElementsByName('Form요소의 name')


// 여러개의 대상이 있을 때 처음나오는 한놈만 가져온다.
var el = document.querySelector('.menu-wrapper > .menu');
console.log( el );

// 여러개의 대상이 있을 때 모든 대상을 배열로 가져온다
var el2 = document.querySelectorAll('.menu-wrapper > .menu');
console.log( el2 );
console.log( el2[0] );
console.log( el2[1] );
console.log( el2[2] );
console.log( el2[3] );


// Event 등록
// 대상.addEventListener('이벤트명', 이벤트발생시 실행할 함수)
// mouse(click, mouseenter, mouseleave, mousemove, wheel) 
// keyboard(keypress, keyup) 
// form(reset, submit), 
// window(resize, scroll)
// Evnet Callback 안에서의 this는 이벤트 대상을 가리킨다.

document.querySelector('.bt-parent').addEventListener('click', function(){
	console.log(winWidth, winHeight);
})

window.addEventListener('resize', function(){
	winWidth = this.innerWidth 
	winHeight = this.innerHeight;
})