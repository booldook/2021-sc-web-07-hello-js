['a', 'b', 'c', 'd', 'e'].indexOf('a') // 배열.indexOf()


/***************** 글로벌 설정 *******************/



/***************** 사용자 함수 *******************/



/***************** 이벤트 등록 *******************/
$('#bt-lotto').on('click', onLotto)



/***************** 이벤트 콜백 *******************/
function onLotto() {
	var numbers = [], i, n
	for(i=0; i<6; i++) {
		n = Math.floor(Math.random() * 45) + 1;
	}
	console.log(numbers)
}