document.getElementById('btn').onmouseenter = function() {mouseEnter()};
document.getElementById('btn').onmouseleave = function() {mouseLeve()};

function mouseEnter()
{
    document.getElementById('btn').style.background = 'rgb(48, 188, 206)';
}

function mouseLeve()
{
    document.getElementById('btn').style.background = 'rgb(48, 111, 206)';
}
