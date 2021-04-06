['a', 'b', 'c', 'd', 'e'].indexOf('a') // 배열.indexOf()


/***************** 글로벌 설정 *******************/



/***************** 사용자 함수 *******************/



/***************** 이벤트 등록 *******************/
$('#bt-lotto').on('click', onLotto)



/***************** 이벤트 콜백 *******************/
function onLotto() {
	var numbers = [], i, n
	// while(조건): 조건이 참일때까지 반복
	while(numbers.length < 6) {	
		n = Math.floor(Math.random() * 45) + 1;
		if(numbers.indexOf(n) === -1) {
			numbers.push(n)
		}
	}
	// numbers.sort(function(a, b) { return a - b }) 오름차순
	// numbers.sort(function(a, b) { return b - a }) 내림차순
	numbers.sort(function(a, b) { return a - b })
	console.log(numbers)
}