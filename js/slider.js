var counter = 0;
var interval;

window.onload = function() {
document.getElementById("home_s").style.cursor = 'default';
  changep()
}
function changep()
{      
       if(counter==0){
        document.getElementById("home_s").style.backgroundImage="url(/img/a.jpg)";
        document.getElementById('p_content').innerHTML = '<span id="chead">Rays of <span id="hsun"> Sun </span> Oriented Light</span><br><span id="ibout">A Solar Powered Products &amp  Solutions Company<span style="color:#5FAD56"> .</span></span>';
      
       counter+=1;
   }
       interval = setInterval(function() {
      if(counter == 0)
      { 
        counter+=1;
        //here add the background image of slide 1
        document.getElementById("home_s").style.backgroundImage="url(/img/b.jpg)";
         document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Solar, the energy of the future.</center></span></center>';
      }
        else if(counter == 1){
          counter+=1;
          //here add the background image of slide 2
          document.getElementById("home_s").style.backgroundImage="url(/img/c.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Electricity bills are increasing by 30% every year as for sunshine its free.</center></span></center>';

        }
         else if(counter == 2){
          counter+=1;
          //here add the background image of slide 3
          document.getElementById("home_s").style.backgroundImage="url(/img/d.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Sun is simply  one big battery for us.</center></span></center>';
 
        }
         else if(counter == 3){
          counter+=1;
          //here add the background image of slide 4
          document.getElementById("home_s").style.backgroundImage="url(/img/e.jpg)";
          document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>You can \' t buy Happiness but you can buy Solar Panels and that \' s pretty close. </center></span></center>';
 
        }
         else if(counter == 4){
          counter+=1;
          counter%=5;
          //here add the background image of slide 5
          document.getElementById("home_s").style.backgroundImage="url(/img/f.jpg)";
           document.getElementById('p_content').innerHTML = '<center><span id="quote"><center>Solar energy, clean energy for a better tomorrow</center></span></center>';
}
}, 8000);
}
