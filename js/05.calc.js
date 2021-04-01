function sum() {
	var a = document.sumForm.a.value;	// String
	var b = document.sumForm.b.value;	// String
	var c = Number(a) + Number(b);
	document.sumForm.c.value = c;
}