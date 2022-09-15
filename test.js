function circle(x, y, r, c, parent) {
    var body = document.getElementsByTagName("body")[0];
    for(var i = 0; i < 2; i++) {
        var xp = x ;
      
        var yp = x ;
    
        
        var p = document.createElement("div");
        p.className = "pixel";
        p.style.left = xp + "px";
        p.style.top = yp + "px";
        p.style.position="absolute";
        p.style.width+=10;
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
    if(r<100)
          r+=10;
    else
        r=50;
        
    circle(100, 100, r, "green");
},3000 );