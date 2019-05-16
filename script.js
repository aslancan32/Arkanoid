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

    var bow;
    var bowX=500;
    var bowY=700;

    bow=svg.rect({
        x:bowX,
        y:bowY,
        width: 240,height: 40,
        fill: '#FF7A4D'
    });

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

    $(document).mousemove(function(event){
        bowX=e.clientX;
    });
    
    $(document).keydown(function(event){

        var code = event.which;
        console.log(code);
        
    });
    //console.log(top)
})