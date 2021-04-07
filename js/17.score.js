/* 
$('.wrapper') 		=> return jquery object
$('.wrapper')[0]	=> return javascript object
$($('.wrapper')[0])	=> return jquery object
$(document.querySelector('.wrapper'))	=> return jQuery object
*/

/* scores[0] = {
	name: '홍길동',
	kor: 80,
	eng: 90,
	math: 85,
	total: 255,
	avg: 85,
	rank: 2
} */

/******************* 글로벌 설정 *********************/
var scores = []


/******************* 사용자 함수 *********************/


/******************* 이벤트 등록 *********************/


/******************* 이벤트 콜백 *********************/
function onScoreSubmit(f) {
	// var f = document.scoreForm
	var name = f.name.value
	var kor = f.kor.value
	var eng = f.eng.value
	var math = f.math.value
	if(name === '') {
		alert('이름을 입력하세요.')
		return false
	}
	if(kor === '') {
		alert('국어점수를 입력하세요.')
		return false
	}
	if(eng === '') {
		alert('영어점수를 입력하세요.')
		return false
	}
	if(math === '') {
		alert('수학점수를 입력하세요.')
		return false
	}
	
	return false
}
