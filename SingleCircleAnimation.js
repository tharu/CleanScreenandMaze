// Single Circle - Get Canvas element by Id
window.onload=function()
{
    init();
    document.getElementById("myCanvas").onclick=stopAnimation;
}

var timerId;
function init()
{
    function animate() {
        var c=document.getElementById("myCanvas");
        c.width=800;
        c.height=800;
        var ctx=c.getContext("2d");
        ctx.save();
        ctx.clearRect(0, 0, c.width, c.height);
         if(i > 400) {
            i = 400;
         }
        if( i > 40) {
            ctx.beginPath();
            ctx.arc(400, 400, i, 100, Math.PI, true);
            ctx.fillStyle = "#008000";
            ctx.fill();
        }
        i++;
        ctx.restore();
        timerId=setTimeout(animate, 10);
    }
    var i = 20;
    animate();
}

function stopAnimation()
{
     clearTimeout(timerId);
}

