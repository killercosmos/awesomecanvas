canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
color="red";

ctx.beginPath();
ctx.strokestyle = color;
ctx.linewidth = 2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    var color = document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x -" + mouse_x + "y -" + mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y)
{
    ctx.beginpath();
    ctx.linewidth = 2;
    ctx.strokestyle = color;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
    
}

function cleararea()
{
ctx.clearect(0,0,canvas.width,canvas.height);
}
