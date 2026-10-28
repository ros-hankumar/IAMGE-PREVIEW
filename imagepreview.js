const file=document.getElementById("file");
const image=document.getElementById("img");
file.addEventListener("change",function(event){
 img.src=URL.createObjectURL(event.target.files[0]);
});     


