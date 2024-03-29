window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600);
	var coiny = Math.random() * (400);
    
    var t = Date.now();
    let speed = 300;
    let dir = 0;
    let score = 0;

    let up = document.getElementById('up');
    let down = document.getElementById('down');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    up.onmousedown = function() { dir = 4;}
    down.onmousedown = function() { dir = 3;}
    left.onmousedown = function() { dir = 2;}
    right.onmousedown = function() { dir = 1;}

    up.ontouchstart = function() { dir = 4;}
    down.ontouchstart = function() { dir = 3;}
    left.ontouchstart = function() { dir = 2;}
    right.ontouchstart = function() { dir = 1;}

    up.onmouseup = function() { dir = 0;}
    down.onmouseup = function() { dir = 0;}
    left.onmouseup = function() { dir = 0;}
    right.onmouseup = function() { dir = 0;}

    up.ontouchend = function() { dir = 0;}
    down.ontouchend = function() { dir = 0;}
    left.ontouchend = function() { dir = 0;}
    right.ontouchend = function() { dir = 0;}

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        context.clearRect(0, 0, 600, 400);
        // Score shown
        context.font = '16px Arial';
        context.fillStyle = 'blue';
        context.fillText("Score: " + score, 20, 30);
        // Red box
        context.beginPath();
        context.rect(x, y, 30, 30);
        context.fillStyle="red";
        context.fill();
        // Yellow box
        context.beginPath();
        context.rect(coinx, coiny, 20, 20);
        context.fillStyle="#e3c228";
        context.fill(); 

        if(dir == 1) { 
            if(x+100 < 600) {
                x += (speed * timePassed);
            }
        }
        else if(dir == 2) { 
            if(x > 0) {
                x -= (speed * timePassed);
            }
        }
        else if(dir == 3) { 
            if(y+100 < 400) {
                y += (speed * timePassed);
            }
        }
        else if(dir == 4) { 
            if(y > 0) {
                y -= (speed * timePassed);
            }
        }

        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50) {
            score++;
            coinx = Math.random() * (600);
            coiny = Math.random() * (400);
        }

        window.requestAnimationFrame(draw);
    }
    draw();
}
