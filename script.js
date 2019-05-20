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

    var w=70 ;
    var h =35  ;
    var power=1;
    var brickArray= new Array();

    for (var brickY = 50; brickY < 350 ; brickY+=45) {
        for(var brickX=35; brickX<1065; brickX += 105){

            var drawBrick = Math.floor(Math.random()*2);
            if (drawBrick == 1)
                createBrick(brickX,brickY);
        }
        
    }

    

    setInterval(function(){

        ball.attr({cx:ballX, cy:ballY}); // svg obsejesinin attribute degerlerini degistirir.
        
        ballX += pathX;
        ballY += pathY;

        if(ballX <= borderXStart +10 || ballX >= borderXEnd-5){
            pathX *= -1;
        }
        if(ballY <= borderYStart +10 || ballY >= borderYEnd-10){
            pathY *= -1;
        }
        
        if (ballY == 690 && (ballX > bowX - 10 && ballX < bowX +250)) {
            
            pathY *= -1;
        }

        // if((power>0)&&(ballY == 285 && (ballX > 290 && ballX < 395)) || (ballY == 240 && (ballX > 290 && ballX < 395))){
            
        //     pathY *= -1;
        //     virtualBrick.remove();
        //     power -= -1;
        // }

        // if ((power>0)&&((ballX == 290 && (ballY > 240 && topY < 285))) || (ballX == 395 && (ballY > 240 && topY < 285)))  {
        //     pathX *= -1;
        //     virtualBrick.remove();
        //     power -= -1;
        // }
        for(var i=0; i < brickArray.length; i++){

            
            

            if((brickArray[i].power>0) && ((ballY==brickArray[i].y+h+ballR && (ballX>brickArray[i].x-ballR && ballX<brickArray[i].x+w+ballR))||(ballY==brickArray[i].y-ballR && (ballX>brickArray[i].x-ballR && ballX<brickArray[i].x+w+ballR)))){
                
                brickArray[i].power=0;
                brickArray[i].virtualBrick.remove();
                pathY=pathY*-1;
            }

            if ((brickArray[i].power>0) && ((ballX==brickArray[i].x-ballR && (ballY>brickArray[i].y-ballR && ballY<brickArray[i].y+h+ballR))||(ballX==brickArray[i].x+w+ballR && (ballY>brickArray[i].y-ballR && ballY<brickArray[i].y+h+ballR)))){
                brickArray[i].power=0;
                brickArray[i].virtualBrick.remove();
                pathY=pathX*-1;
            }
        }    
    },2);

    $(document).mousemove(function(event){
        bowX=event.clientX;
        if(bowX<860)
            bow.attr({x:bowX});
    });
    
    $(document).keydown(function(event){

        var code = event.which;

            if (code==37) {
                
                if(bowX>10)
                    bowX-=10;
                    bow.attr({x:bowX});
            }
        
            if (code==39) {

                if(bowX<860)
                    bowX+=10;
                    bow.attr({x:bowX});
            }
    });

    function createBrick(brickX,brickY){

        var virtualBrick = svg.rect({
            x:brickX,
            y:brickY,
            width:w,height:h,
            fill:'#ff2121'
        });

        var brick = {
            x:brickX,
            y:brickY,
            power:1,
            virtualBrick:virtualBrick
        };
        brickArray.push(brick);   
    }
})