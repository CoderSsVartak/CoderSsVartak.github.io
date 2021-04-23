// Image flip control variable
var display_flip = "shown";

function display(){
    
    document.getElementById('mobile-navigation').style.transitionProperty = "ease-in-out 2s";
    document.getElementById('mobile-navbar').style.borderRadius = "15px";

    if (document.getElementById('mobile-navigation').style.display == "flex"){
        document.getElementById('mobile-navigation').style.display = "none";
    }
    else{
        document.getElementById('mobile-navigation').style.display = "flex";
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
        $('#profile').css('opacity', "0%");
        $('#undder-img').css('display', 'flex');
        display_flip = "hidden";
    }
    else{
        $('#profile').css('opacity', "100%");
        $('#undder-img').css('display', 'none');
        display_flip = "shown";
    }

}