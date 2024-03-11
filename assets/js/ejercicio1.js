let image = document.querySelector("#imagen");

 image.addEventListener("click", () => { 
     if (image.style.border == "2px solid red") {
       image.style.border = "none";
     } else {
       image.style.border = "2px solid red";
     }
   });