// Image flip control variable
var display_flip = "shown";

function display(){
    
    

    if (document.getElementById('mobile-navigation').style.display == "flex"){
        document.getElementById('menu-img').style.transform = "rotateZ(0deg)";
        document.getElementById('menu-img').style.transition = "linear .4s";
        document.getElementById('menu-img').src = "media/hamburger.jpg";
        document.getElementById('mobile-navigation').style.display = "none";
    }
    else{
        document.getElementById('mobile-navigation').style.display = "flex";
        document.getElementById('menu-img').style.transform = "rotateZ(180deg)";
        document.getElementById('menu-img').style.transition = "linear .4s";
        document.getElementById('menu-img').style.borderRadius = "19px";
        document.getElementById('menu-img').style.backgroundColor = "lightblue";
        document.getElementById('menu-img').src = "media/close.png";
    }

}



// desktop function to show current tab
var link_container = document.getElementsByClassName("navbar");
var btns = document.getElementsByClassName("anchor");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// Profile image flip
function hide_image(){

    if(display_flip == "shown"){
        document.getElementById('profile').style.transform = "rotateY(180deg)";
        document.getElementById('indicator').style.display = "none";
        document.getElementById('profile').style.transition = "linear .6s";
        $('#profile').css('opacity', "0%");
        $('#undder-img').css('display', 'flex');
        display_flip = "hidden";
    }
    else{
        document.getElementById('profile').style.transform = "rotateY(0deg)";
        document.getElementById('indicator').style.display = "inline-flex";
        document.getElementById('profile').style.transition = "linear .4s";
        $('#profile').css('opacity', "100%");
        $('#undder-img').css('display', 'none');
        display_flip = "shown";
    }

}
