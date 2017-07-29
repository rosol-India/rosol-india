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

changep();
}
function clicka()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl1.png" alt="ROSOL Solar Collector">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center> Solar Collector</center></h1><ul class="listed_a"><li class="a01">It is a panel designed to utilise solar energy for generating electricity.</li><li class="a02">These are <b>weather-proof</b> and are able to withstand high level of ultra-violet radiations and moisture</li><li class="a03">Our company provides <b>high quality</b> panels with <b>25 years performance warranty</b></li><li class="a04">It can also run directly on electricity and grid, </li><li class="a05">Electricity <b>savings</b> upto <b>70%</b>. </li><!--<li class="a06">It is ideal for industries, hotels, supermarkets, colleges, schools, factories, restaurants, commercial places. </li>--></ul>'
      
}
function clickb()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='black';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl2.png" alt="ROSOL Solar AC">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Air Conditioner</center></h1><ul class="listed_a"><li class="a01">Solar AC use the combination of <b>solar power and battery</b>,</li><li class="a02"><b>Plug-n-play</b> solar connection, </li><li class="a03">48 V solar battery power with <b>anti corrosion</b> technology,</li><li class="a04">It can also run directly on electricity and grid, </li><li class="a05">Electricity <b>savings</b> upto <b>70%</b>. </li><!--<li class="a06">Solar powered Air-Conditioning a is ideal for industries, hotels, supermarkets, colleges, schools, factories, restaurants, commercial places. </li>--></ul>';
}
function clickc()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='black';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl3.png" alt="ROSOL Solar Home Lighting System">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Home Lighting System</center></h1><ul class="listed_a"><li class="a01">A efficient energy solution includes a solar panel with <b>inbuilt battery</b> pack, <b>two solar lights</b> ,<b>two light switch.</b></li><li class="a02">It is <b>easy to carry</b> because of its <b>compact design</b> and <b>light weighted metal body.</b></li><li class="a03">LED Bulb <b>Overcharge Protection</b></li><li class="a04">Output Battery Back up Ranges : Upto 12-24 hrs</li><li class="a05">Solar Battery : 3 Years Warranty </li></ul>';
}
function clickd()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='black';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl4.png" alt="ROSOL Solar Table Fan">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Table Fan</center></h1><ul class="listed_a"><li class="a01">It requires very <b>Low Voltage</b> input which leads to <b>reduced electricity bills</b>.</li><li class="a02">Solar Table Fan can Run on both Electricity and Solar Energy.</li><li class="a03">It makes <b>No noise</b> and produces <b>No heat</b> during operation</li><li class="a04">Once fully charged, it can provide Backup up for 7-8 hours.</b></li><li class="a05">Warranty: 2 years.</li></ul>';
}
function clicke()
{        
    clearInterval(interval);
       document.getElementById('c-butna').style.backgroundColor='white';
       document.getElementById('c-butnb').style.backgroundColor='white';
       document.getElementById('c-butnc').style.backgroundColor='white';
       document.getElementById('c-butnd').style.backgroundColor='white';
       document.getElementById('c-butne').style.backgroundColor='black';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl5.png" alt="ROSOL Solar Lantern">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Lantern</center></h1><ul class="listed_a"><li class="a01">Built in electrical charger with <b>overcharge protection</b> for safety and <b>long life</b>.</li><li class="a02">It also provides <b>Mobile Charging facility</b>.</li><li class="a03">Unique two-way operation with <b>LED indicators</b> for comfort.</li><li class="a04">Once fully charged, it can provide <b>Backup Upto 8-10 hours</b></li><li class="a05">Solar Module: 15 Yrs Warranty</li></ul>';
}
function changep()
{
       if(counter==0){
        document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl1.png" alt="ROSOL Solar Collector">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center> Solar Collector</center></h1><ul class="listed_a"><li class="a01">It is a panel designed to utilise solar energy for generating electricity.</li><li class="a02">These are <b>weather-proof</b> and are able to withstand high level of ultra-violet radiations and moisture</li><li class="a03">Our company provides <b>high quality </b>panels with <b>25 years performance warranty</b></li><li class="a04">It can also run directly on electricity and grid, </li><li class="a05">Electricity <b>savings</b> upto <b>70%</b>. </li><!--<li class="a06">It is ideal for industries, hotels, supermarkets, colleges, schools, factories, restaurants, commercial places. </li>--></ul>'
      
       counter+=1;
   }
       interval = setInterval(function() {
      if(counter == 0)
      { 
        counter+=1;
       document.getElementById('c-butna').style.backgroundColor='black';
       document.getElementById('c-butne').style.backgroundColor='white';
       document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl1.png" alt="ROSOL Solar Collector">';
       document.getElementById('p_content').innerHTML = '<h1 class="phead"><center> Solar Collector</center></h1><ul class="listed_a"><li class="a01">It is a panel designed to utilise solar energy for generating electricity.</li><li class="a02">These are <b>weather-proof</b> and are able to withstand high level of ultra-violet radiations and moisture</li><li class="a03">Our company provides <b>high quality</b> panels with <b>25 years performance warranty</b></li><li class="a04">It can also run directly on electricity and grid, </li><li class="a05">Electricity <b>savings</b> upto <b>70%</b>. </li><!--<li class="a06">It is ideal for industries, hotels, supermarkets, colleges, schools, factories, restaurants, commercial places. </li>--></ul>'
      }
        else if(counter == 1){
          counter+=1;
          document.getElementById('c-butna').style.backgroundColor='white';
          document.getElementById('c-butnb').style.backgroundColor='black';
          document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl2.png" alt="ROSOL Solar AC">';
          document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Air Conditioner</center></h1><ul class="listed_a"><li class="a01">Solar AC use the combination of <b>solar power and battery</b>,</li><li class="a02"><b>Plug-n-play</b> solar connection, </li><li class="a03">48 V solar battery power with <b>anti corrosion</b> technology,</li><li class="a04">It can also run directly on electricity and grid, </li><li class="a05">Electricity <b>savings</b> upto <b>70%</b>. </li><!--<li class="a06">Solar powered Air-Conditioning a is ideal for industries, hotels, supermarkets, colleges, schools, factories, restaurants, commercial places. </li>--></ul>';

        }
         else if(counter == 2){
          counter+=1;
            document.getElementById('c-butnb').style.backgroundColor='white';
            document.getElementById('c-butnc').style.backgroundColor='black';
            document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl3.png" alt="ROSOL Solar Home Lighting System">';
            document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Home Lighting System</center></h1><ul class="listed_a"><li class="a01">A efficient energy solution includes a solar panel with <b>inbuilt battery</b> pack, <b>two solar lights</b> ,<b>two light switch.</b></li><li class="a02">It is <b>easy to carry</b> because of its <b>compact design</b> and <b>light weighted metal body.</b></li><li class="a03">LED Bulb <b>Overcharge Protection</b></li><li class="a04">Output Battery Back up Ranges : Upto 12-24 hrs</li><li class="a05">Solar Battery : 3 Years Warranty </li></ul>';
 
        }
         else if(counter == 3){
          counter+=1;
            document.getElementById('c-butnc').style.backgroundColor='white';
            document.getElementById('c-butnd').style.backgroundColor='black';
            document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl4.png" alt="ROSOL Solar Table Fan">';
            document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Table Fan</center></h1><ul class="listed_a"><li class="a01">It requires very <b>Low Voltage</b> input which leads to <b>reduced electricity bills</b>.</li><li class="a02">Solar Table Fan can Run on both Electricity and Solar Energy.</li><li class="a03">It makes <b>No noise</b> and produces <b>No heat</b> during operation</li><li class="a04">Once fully charged, it can provide Backup up for 7-8 hours.</b></li><li class="a05">Warranty: 2 years.</li></ul>';
 
        }
         else if(counter == 4){
          counter+=1;
          counter%=5;
            document.getElementById('c-butnd').style.backgroundColor='white';
            document.getElementById('c-butne').style.backgroundColor='black';
            document.getElementById('p_image').innerHTML = '<img class="imgp" src="/img/sl5.png" alt="ROSOL Solar Lantern">';
            document.getElementById('p_content').innerHTML = '<h1 class="phead"><center>Solar Lantern</center></h1><ul class="listed_a"><li class="a01">Built in electrical charger with <b>overcharge protection</b> for safety and <b>long life</b>.</li><li class="a02">It also provides <b>Mobile Charging facility</b>.</li><li class="a03">Unique two-way operation with <b>LED indicators</b> for comfort.</li><li class="a04">Once fully charged, it can provide <b>Backup Upto 8-10 hours</b></li><li class="a05">Solar Module: 15 Yrs Warranty</li></ul>';
}
}, 10000);
}
/*
function displayInfo(){
    document.getElementById("info1").style.display="block";
}*/