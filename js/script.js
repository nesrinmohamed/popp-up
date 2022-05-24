
var myImges =Array.from(document.querySelectorAll(".item img"));
var boxContainer = document.querySelector(".box-container")
var close = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");

var imgIndex = 0;

for(var i = 0; i < myImges.length; i++){
    myImges[i].addEventListener('click', shoBox)
   close.addEventListener('click',hideBox);
   next.addEventListener('click', nextImg);
   prev.addEventListener('click', prevImg)
}

function shoBox(e){
    boxContainer.style.transform="scale(1,1)";
    var imgSrc = e.target.src;
boxContainer.firstElementChild.style.backgroundImage= "url("+imgSrc+")";
imgIndex = myImges.indexOf(e.target);
}

function nextImg(){
 boxContainer.firstElementChild.style.backgroundImage= "url("+myImges[imgIndex].src+")";
 imgIndex++;
 if(imgIndex==myImges.length){
  imgIndex=0;
}
}

function prevImg(){
  boxContainer.firstElementChild.style.backgroundImage= "url("+myImges[imgIndex].src+")";
  imgIndex--;
  if(imgIndex < 0){
    imgIndex=myImges.length-1;
  }
}
document.addEventListener("keydown", function(e){
  if(e.keyCode==39){
    nextImg();
  }
  else if(e.keyCode==37){
    prevImg();
  }
  else if(e.keyCode==32){
    hideBox();
  }
});


function hideBox(){
boxContainer.style.transform="scale(0,0)";
}


$(document).ready(function(){
$(".loader").delay(5000).fadeout(slow)

});

