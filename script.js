function display(){
    
    if (document.getElementById('mobile-navigation').style.display == "flex"){
        document.getElementById('mobile-navigation').style.display = "none";
    }
    else{
        document.getElementById('mobile-navigation').style.display = "flex";

        document.getElementById('mobile-navbar').style.borderRadius = "5px";
    }

}