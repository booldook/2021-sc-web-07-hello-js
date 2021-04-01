var zIdx = 1;

function show(id) {
	zIdx = zIdx + 1;
	console.log(zIdx);
	document.getElementById(id).style.zIndex = zIdx;
}