var container = document.querySelector('#page1')

function slide() {
  // container.style.transform = 'translateY(0)';
  firstPepsi.style.display = 'none';
}
var firstPepsi = document.querySelector('#pepsi')
function leftSlide(){
  firstPepsi.style.transform = 'translateX(0)';
}
var secondPepsi = document.querySelector('#pepsi-2')
function rightSlide(){
  secondPepsi.style.transform = 'translateX(0)';
}
function secondPageHide(){
  secondPepsi.style.display = 'none';
}
var thirdPepsi = document.querySelector('#pepsi-3')
function thirdOpen(){
  thirdPepsi.style.transform = 'translateX(0)';
}
function thirdHide(){
  thirdPepsi.style.display = 'none';
}
