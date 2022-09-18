function circle(x, y, r, c, parent) {
    var body = document.getElementsByTagName("body")[0];
    for(var i = 0; i < 2; i++) {
        var xp = x ;
      
        var yp = x ;
    
        alert("r"+r);
        var p = document.createElement("div");
        p.className = "pixel";
        p.style.left = xp + "px";
        p.style.top = yp + "px";
        p.style.position="absolute";
        p.style["width"]=r;
        alert(p.style["width"]);
        if(c) p.style.background = c;
        
        if(parent) {
            parent.appendChild(p)
        } else {
            body.appendChild(p);
        }					
    }
}			

function init() {
    circle(100, 100, 50, "green");
    // circle(100, 100, 40, "red");
    // circle(100, 100, 30, "blue");
    // circle(100, 100, 20, "orange");
    // circle(100, 100, 10, "black");
    
}
var r=50;
setInterval(function()
{
    // if(r<100)
          r+=100;
    // else
    //     r=50;
        
    circle(100, 100, r, "green");
},7000 );