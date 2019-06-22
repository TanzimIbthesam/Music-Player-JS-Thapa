var divlength=document.querySelectorAll('.song').length;
// console.log(divlength);
for(var i=0;i<divlength;i++){
    var demo=document.querySelectorAll('.song')[i].addEventListener('click',playsong);
    var demo=document.querySelectorAll('.song')[i].addEventListener('dblclick',pausesong);
}

var song1=new Audio();
song1.src="music/Fortminar.mp3";

var song2=new Audio();
song2.src="music/CREED.mp3";
function playsong(){

    var songId=this.innerHTML;
    console.log(songId);
    switch(songId){
   
      case "A":
       song1.play();
      break;
       
        case "B":
        song2.play();
        break;
        
        case "C":
        song1.play();
        break;
            
         case "D":
          song2.play();
        break;
        
        case "E":
        song1.play();
        break;
                        
        case "F":
        song2.play();
        break;
        
        case "G":
        song1.play();
        break;
                             
        case "H":
        song2.play();
        break;
        default:
        console.log("Wrong input");
         break;


    }

}
function pausesong(){
    //     var song1=new Audio();
    // song1.src="music/Fortminar.mp3";
        var songId=this.innerHTML;
        console.log(songId);
        switch(songId){
       
          case "A":
           song1.pause();
          break;
           
            case "B":
            song2.pause();
            break;
            
            case "C":
            song1.pause();
            break;
                
             case "D":
              song2.pause();
            break;
            
            case "E":
            song1.pause();
            break;
                            
            case "F":
            song2.pause();
            break;
            
            case "G":
            song1.pause();
            break;
                                 
            case "H":
            song2.pause();
            break;
            case "H":
            song2.pause();
             break;
            default:
            console.log("Wrong input");
             break;
    
    
        }
    
    }