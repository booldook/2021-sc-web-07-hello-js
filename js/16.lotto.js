['a', 'b', 'c', 'd', 'e'].indexOf('a') // 배열.indexOf()


/***************** 글로벌 설정 *******************/



/***************** 사용자 함수 *******************/



/***************** 이벤트 등록 *******************/
$('#bt-lotto').on('click', onLotto)
$('#bt-reset').on('click', onReset)



/***************** 이벤트 콜백 *******************/
function onReset() {
	$('.disp-wrapper .display').empty()
	$('.history-wrapper').empty()
}


function onLotto() {
	/******* 변수선언 *******/
	var numbers = [], n, i, color
	// while(조건): 조건이 참일때까지 반복

	/******* 랜덤한 로또번호 6개를 추출 *******/
	while(numbers.length < 6) {	
		n = Math.floor(Math.random() * 45) + 1;
		if(numbers.indexOf(n) === -1) numbers.push(n)
	}

	/******* 추출된 번호를 오름차순 정렬 *******/
	// numbers.sort(function(a, b) { return a - b }) 오름차순
	// numbers.sort(function(a, b) { return b - a }) 내림차순
	numbers.sort(function(a, b) { return a - b })

	/******* .display에 표현 *******/
	$('.disp-wrapper .display').empty()
	for(i=0; i<6; i++) {
		if(numbers[i] <= 10) { color = 'yellow' }
		else if(numbers[i] <= 20) { color = 'blue' }
		else if(numbers[i] <= 30) { color = 'red' }
		else if(numbers[i] <= 40) { color = 'grey' }
		else { color = 'green' }
		$('.disp-wrapper .display').append('<li class="ball '+color+'">'+numbers[i]+'</li>');
	}

	/******* .history-wrapper에 넣어주기 *******/
	$('.history-wrapper').prepend($('.disp-wrapper .display').clone())
}