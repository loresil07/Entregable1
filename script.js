document.getElementById("addButton").addEventListener("click", "function()") 
{let text= document.getElementById("text").ariaValueText;}
if(text) var li= document.createElement("li"); 
li.textContent= text; document.getElementById("ul").appendChild(li); document.getElementById("text").ariaValueText; //Limpiar el input
  