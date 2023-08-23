document.querySelector('.hamburger').addEventListener('click', function(){
  this.classList.toggle('active');
  document.querySelector('.header-group').classList.toggle('active');
})

//フォント切り替え用
function setHref( $href ) {
  var $elementReference = document.getElementById( "sampleLink" );
  $elementReference.href = $href;
}


