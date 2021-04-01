var zIdx = 1;

function show(id, n) {
	zIdx = zIdx + 1;
	document.getElementById(id).style.zIndex = zIdx;
	document.getElementsByClassName('pager')[0].style.color = '#ccc';
	document.getElementsByClassName('pager')[1].style.color = '#ccc';
	document.getElementsByClassName('pager')[2].style.color = '#ccc';
	document.getElementsByClassName('pager')[n].style.color = '#2896f0';
}

show('banner1', 0);