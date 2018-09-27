setInterval(function(){
    var paragraph = document.createElement("p");
    var text = document.createTextNode("wow");
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);
},1000);