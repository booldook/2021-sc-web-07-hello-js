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

document.querySelector('.bt-parent').addEventListener('click', function(){

})