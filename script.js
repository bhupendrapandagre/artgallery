let body = document.querySelector("body"),
    lightBox = document.querySelector(".lightBox"),
    img = document.querySelectorAll(".gImg"),
    //double krna
    showImg = lightBox.querySelector(".showImg img"),
    close = lightBox .querySelector(".close");
//yaha change honga
   for (let image of img) {
     image.addEventListener("click", ()=>{
       showImg.src = image.src;
       lightBox.style.display = "block";
       body.style.overflow = "hidden";
       close.onclick = ()=>{
         lightBox.style.display = "none";
         //save nahi ho to push
         body.style.overflow = "visible";
       };
     });
   }
