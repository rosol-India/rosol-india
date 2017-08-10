    var hclick=0;
    var counter = 0;
var interval;
var t = 0;
    /*function screen_check() {
        var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);

        if(w = 500) {
           changep();
        } else if(w > 500 && w <=850) {
            //max-width 850px
            // actions here...
            orange();
        } else {
            // 850px and beyond
            // actions here...
            green();
        }

    }*/
    
window.onload = function() {
  setTimeout(function() { changep(); }, 4000);
}
function clicka()
{        
    clearInterval(interval);
       document.getElementById('p_content').innerHTML = '<span id="projh">Our Projects</span>';
       document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
      
}
function clickb()
{        
    clearInterval(interval);
    document.getElementById('p_content').innerHTML = '<span id="wgs" style="padding-bottom:20px;">Why go Solar?</span><table id="tab" style="width: 80%;" border="0" cellpadding="15" ><tbody><tr><td><center><img style="width:80px;"src="/img/icons/pe.png"><br><span id="wogs">Save the <span style="color:#5FAD56">Environment</span></span></center></td><td><center><img style="width:80px;"src="/img/icons/sm.png"><br><span id="wogs">Earn a great Return!</span></center></td><td><center><img style="width:80px;"src="/img/icons/shp.png"><br><span id="wogs">Guaranteed Performance</span></center></td></tr><tr><td><center><img style="width:80px;"src="/img/icons/emai.png"><br><span id="wogs">Easy Maintenance</span></center></td><td><center><img style="width:80px;"src="/img/icons/lb.png"><br><span id="wogs">Reduce your bills!</span></center></td><td><center><img style="width:80px;"src="/img/icons/sus.png"><br><span id="wogs">Commit to Sustainability</span></center></td></tr><tr><td colspan="3"><center><img style="width:90px;"src="/img/icons/solc.png"><br><span id="wogs">Use our Calculator to find your savings on switching to Solar</span></center></td></tr></tbody></table>';
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='black';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
}
function clickc()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='black';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
}
function clickd()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='black';
       document.getElementById('c-butne').style.backgroundColor='white';
}
function clicke()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='black';
}
function changep()
{
       if(counter==0){
       document.getElementById('p_content').innerHTML = '<span id="projh">Our Projects</span>';
        document.getElementById('c-butna').style.backgroundColor='black';
      
       counter+=1;
   }
       interval = setInterval(function() {
      if(counter == 0)
      { 
        counter+=1;
     document.getElementById('p_content').innerHTML = '<span id="projh">Our Projects</span>';
       document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('c-butne').style.backgroundColor='white';
      }
        else if(counter == 1){
          counter+=1;
        document.getElementById('p_content').innerHTML = '<span id="wgs" style="padding-bottom:20px;">Why go Solar?</span><table id="tab" style="width: 80%;" border="0" cellpadding="15" ><tbody><tr><td><center><img style="width:80px;"src="/img/icons/pe.png"><br><span id="wogs">Save the <span style="color:#5FAD56">Environment</span></span></center></td><td><center><img style="width:80px;"src="/img/icons/sm.png"><br><span id="wogs">Earn a great Return!</span></center></td><td><center><img style="width:80px;"src="/img/icons/shp.png"><br><span id="wogs">Guaranteed Performance</span></center></td></tr><tr><td><center><img style="width:80px;"src="/img/icons/emai.png"><br><span id="wogs">Easy Maintenance</span></center></td><td><center><img style="width:80px;"src="/img/icons/lb.png"><br><span id="wogs">Reduce your bills!</span></center></td><td><center><img style="width:80px;"src="/img/icons/sus.png"><br><span id="wogs">Commit to Sustainability</span></center></td></tr><tr><td colspan="3"><center><img style="width:90px;"src="/img/icons/solc.png"><br><span id="wogs">Use our Calculator to find your savings on switching to Solar</span></center></td></tr></tbody></table>';
          document.getElementById('c-butna').style.backgroundColor='white';
          document.getElementById('c-butnb').style.backgroundColor='black';

        }
         else if(counter == 2){
          counter+=1;
            document.getElementById('c-butnb').style.backgroundColor='white';
            document.getElementById('c-butnc').style.backgroundColor='black';
 
        }
         else if(counter == 3){
          counter+=1;
            document.getElementById('c-butnc').style.backgroundColor='white';
            document.getElementById('c-butnd').style.backgroundColor='black';
 
        }
         else if(counter == 4){
          counter+=1;
          counter%=5;
            document.getElementById('c-butnd').style.backgroundColor='white';
            document.getElementById('c-butne').style.backgroundColor='black';
}
}, 10000);
}
function check()
{
var ch = String.fromCharCode(97 + counter);
  if(ch == 'a')
    clicka();
  if(ch == 'b')
    clickb();
  if(ch == 'c')
    clickc();
  if(ch == 'd')
    clickd();
  if(ch == 'e')
    clicke();          
}
function decreCounter(){
clearInterval(interval);
  if(hclick == 0)
  {
    hclick=-11;
    counter-=2;
  }
  else{
  counter=counter-1;
}
  if(counter<0)
    counter=4;

  check();
}
function increCounter(){
  clearInterval(interval);
  if(hclick == 0)
  {
    hclick=-11;
  }
  else{
  counter=counter+1;
}
  if(counter>4)
    counter%=5;

  check()
}
function knowMore(){
    
    document.getElementById("serb").style.display="none";
    document.getElementById("serc").style.display="none";
    document.getElementById("serd").style.display="none";
    document.getElementById("sera").style.display="none";
    document.getElementById("p1").style.display="none";
    document.getElementById("hidden").style.display="block";
    
  }
function knowMore2(){
    
    document.getElementById("serb").style.display="none";
    document.getElementById("serc").style.display="none";
    document.getElementById("serd").style.display="none";
    document.getElementById("sera").style.display="none";
    document.getElementById("p1").style.display="none";
    document.getElementById("hidden2").style.display="block";
    
  }
function knowMore3(){
    
    document.getElementById("serb").style.display="none";
    document.getElementById("serc").style.display="none";
    document.getElementById("serd").style.display="none";
    document.getElementById("sera").style.display="none";
    document.getElementById("p1").style.display="none";
    document.getElementById("hidden3").style.display="block";
    
  }
function knowMore4(){
    
    document.getElementById("serb").style.display="none";
    document.getElementById("serc").style.display="none";
    document.getElementById("serd").style.display="none";
    document.getElementById("sera").style.display="none";
    document.getElementById("p1").style.display="none";
    document.getElementById("hidden4").style.display="block";
    
  }
function goBack(){
    document.getElementById("sera").style.display="inline-block";
    document.getElementById("serb").style.display="inline-block";
    document.getElementById("serc").style.display="inline-block";
    document.getElementById("serd").style.display="inline-block";
    document.getElementById("p1").style.display="block";
    document.getElementById("hidden").style.display="none";
    document.getElementById("hidden2").style.display="none";
    document.getElementById("hidden3").style.display="none";
    document.getElementById("hidden4").style.display="none";
}

/*
function displayInfo(){
    document.getElementById("info1").style.display="block";
}*/