// document.querySelector('.wrapper')
// document.querySelectorAll('.wrapper')[0]
// console.log( jQuery('.wrapper') );
// console.log( $('.wrapper') );

// document.querySelecor('.wrapper').addEventListener('click', function(){
$('.menu').on('click', function(){
	console.log( $(this) );
	console.log( $(this).parent() );	// $('.menu-wrapper)
	console.log( $(this).parents() );	// [$('.menu-wrapper), $('.wrapper'), 'body', 'html']
	console.log( $(this).children() );	// $(img)
	console.log( $(this).prev() )
	console.log( $(this).next() )
	console.log( $(this).siblings() )
})

for(var i=0; i<document.querySelectorAll('.menu').length; i++) {
	document.querySelectorAll('.menu')[i].addEventListener('click', function(){

	})
}