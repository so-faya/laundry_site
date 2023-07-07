// for slide of service
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("laundery");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "flex";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}
// end

// for slides of operation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
  showSlides(slideIndex += n);
}

function currentSlide(n){
  showSlides (slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides= document.getElementsByClassName("dirty");
  var dots = document.getElementsByClassName("dot");
  if (n> slides.length){
    slideIndex = 1
  }
  if (n<1){
    slideIndex = slides.length
  }
  for (i =0; i< slides.length; i++) {
    slides[i].style.display= "none";
  }
  for (i =0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display ="flex";
  dots[slideIndex - 1].className += " active";
}
// end

// auto silde for operation
var slideIndex = 0;
showSlidess();

function showSlidess (){
  var i;
  var slides = document.getElementsByClassName("dirty");
  for (i = 0; i <slides.length; i++){
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlidess, 2000)
}
