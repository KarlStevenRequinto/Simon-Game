var numberOfimages =document.querySelectorAll(".image").length;
for (var i=0; i<numberOfimages; i++) {

document.querySelectorAll(".image")[i].addEventListener("click",handleClick);

function handleClick() {
    
    var firstPicked = document.querySelector(e);
    document.querySelector(".box1") = firstPicked;
};
}
