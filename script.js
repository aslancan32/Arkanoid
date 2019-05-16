$(document).ready(function(){
    var svg= Pablo('#ground').svg({// height and width setting for svg
        width:1110,
        height:750
    });
    var ball;
    var ballX=550;
    var ballY=500;
    var ballR=10;

    ball=svg.circle({
        cx:ballX,
        cy:ballY,
        r:ballR,
        fill:'#060'
    });

    var pathX=-1;
    var pathY=-1;
    var x;

    setInterval(function(){

        ball.attr({cx:ballX, cy:ballY}); // svg obsejesinin attribute degerlerini degistirir.
        
        ballX+=pathX;
        ballY+=pathY;

        

    },20);

    //console.log(top)
})