function create_box(){
    var box = document.createElement("div");
    document.body.appendChild(box);
    box.setAttribute("id","black_box")
    box.style.height = "30px";
    box.style.width = "30px";
    box.style.position = "absolute";
    box.style.backgroundColor = "black";
    box.style.cursor = "pointer";
    box.onclick = function(){box_position();}
    box_position();
    
}
function box_position(){
    var box = document.getElementById("black_box");
    box.style.top = Math.random() * window.innerHeight + "px";
    box.style.left = Math.random() * window.innerWidth + "px";
}
create_box();

