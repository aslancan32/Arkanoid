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

    var borderXStart=0;
    var borderXEnd=1100;
    var borderYStart=0;
    var borderYEnd=750;


    var path= [-1,1]
    var pathX=path[Math.floor(Math.random()*2)];
    var pathY=path[Math.floor(Math.random()*2)];


    setInterval(function(){

        ball.attr({cx:ballX, cy:ballY}); // svg obsejesinin attribute degerlerini degistirir.
        
        ballX+=pathX;
        ballY+=pathY;

        if(ballX <= borderXStart +10 || ballX >= borderXEnd-5){
            pathX*=-1;
        }
        if(ballY <= borderYStart +10 || ballY >= borderYEnd-10){
            pathY*=-1;
        }
        

    },10);

    //console.log(top)
})