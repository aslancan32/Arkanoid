
// Yorum satiri yapmak icin Ctrl + K > C kisayolu

// Yorum satiri yapmak icin Ctrl + K > U kisayolu

// Belilenen sure araliginda tekrar calisan bir metodtur.
var x= 3;
var interval=setInterval(function(){
    x+=1;
    console.log(x);
    if(x==10){
        clearInterval(interval);
    }
    

},2000);