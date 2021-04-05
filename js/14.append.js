/************ 전역설정 *************/
var stage = document.querySelector('.stage')
var btAppend = document.querySelector('.bt-append')
var btRemove = document.querySelector('.bt-remove')

/************ 사용자 함수 *************/


/************ 이벤트 설정 *************/
btAppend.addEventListener('click', onAppend)
btRemove.addEventListener('click', onRemove)

/************ 이벤트 콜백 *************/
function onAppend() {
	// var html = stage.innerHTML
	// stage.innerHTML = html + '<div class="box"></div>'

	// stage.innerHTML = stage.innerHTML + '<div class="box"></div>'

	stage.innerHTML += '<div class="box"></div>'
}

function onRemove() {
	stage.innerHTML = '';
}



