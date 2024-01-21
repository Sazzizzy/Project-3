
function hideMenu(){
    var x = document.getElementById("hidden");
    if(x.style.marginLeft === "-300px"){
        x.style.marginLeft = "10px"
    }
    else{
        x.style.marginLeft="-300px"

    }
}
var accordions = document.getElementsByClassName("center-content-body-headers")
var i;
for(i = 0; i < accordions.length; i++){
    accordions[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var accordionContent = this.nextElementSibling;
        if(accordionContent.style.maxHeight === "2000px"){
            accordionContent.style.maxHeight = "0";

            // accordionContent.style.display = "none";
            this.classList.remove("minus-sign"); 
            this.classList.add("plus-sign");           

        } else{
            // accordionContent.style.display = "grid";
            this.classList.add("minus-sign");
            this.classList.remove("plus-sign");           

            accordionContent.style.maxHeight = "2000px";

        }
    });
}
