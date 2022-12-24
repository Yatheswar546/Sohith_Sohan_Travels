const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}
function plusslide(n){
    counter += n;
    slidefun(counter);
    resetTimer();
}
function currentslide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}
function slidefun(n) {
    let i;
    for(i=0; i<myslide.length; i++){
        myslide[i].style.display = "none";
    }
    for(i=0; i<dot.length; i++){
        dot[i].classList.remove('active');
    }
    if(n > myslide.length){
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}


// -------------------- NAVBAR Js ------------------------- //
$(function(){
    $(".toggle").on("click",function(){
        if($(".menu").hasClass("active")){
            $(".menu").removeClass("active");
            $(this).find("a").html("<i class='bx bx-menu' ></i>");
        }
        else{
            $(".menu").addClass("active");
            $(this).find("a").html("<i class='bx bx-x' ></i>");
        }
    });
});