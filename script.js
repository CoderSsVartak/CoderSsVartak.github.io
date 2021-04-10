function display(){
    
    if (document.getElementById('mobile-navigation').style.display == "flex"){
        document.getElementById('mobile-navigation').style.display = "none";
    }
    else{
        document.getElementById('mobile-navigation').style.display = "flex";

        document.getElementById('mobile-navbar').style.borderRadius = "5px";
    }

}


var link_container = document.getElementsByClassName("navbar");

var btns = document.getElementsByClassName("anchor");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

function mousein(){
    console.log("Hello");
    $('#profile').css('opacity', "5%");
    $('#undder-img').css('display', 'flex');
}

function mouseout(){
    $('#profile').css('opacity', "100%");
    $('#undder-img').css('display', 'none');
}

$('#profile').hover(mousein, mouseout);
