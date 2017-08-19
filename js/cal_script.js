var bill = 0;
var unit = 0;
var tariff=0;
var choice_bill_unit=0;
var new_bill=0,new_unit=0;
var saving_on_bill=0,saving_on_unit=0;
var cost=0,subsidy_percent=0,rate=0,after_subsidy_cost=0;
var solar_percent=0;
var myChart,myChart1;
var flag=0;
function setResident()
{
    flag=1;
    document.getElementById("INPUT_37").style.backgroundColor="#188b44";
    document.getElementById("INPUT_37").style.border="1.5px black solid";
	document.getElementById("INPUT_39").style.border="1.5px solid transparent";
    document.getElementById("INPUT_41").style.border="1.5px solid transparent";    
    document.getElementById("INPUT_39").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_39").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_39").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }

    document.getElementById("INPUT_41").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_41").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_41").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }


    document.getElementById("err_msg3").innerHTML="";

}
function setNotResident()
{
    flag=2;
    document.getElementById("INPUT_39").style.backgroundColor="#188b44";
    document.getElementById("INPUT_39").style.border="1.5px black solid";
     document.getElementById("INPUT_37").style.border="1.5px solid transparent";
    document.getElementById("INPUT_41").style.border="1.5px solid transparent";

    document.getElementById("INPUT_37").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_37").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_37").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }


    document.getElementById("INPUT_41").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_41").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_41").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }
    document.getElementById("err_msg3").innerHTML="";

}
function setNotResident1()
{
    flag=3;
    document.getElementById("INPUT_41").style.backgroundColor="#188b44";
    document.getElementById("INPUT_41").style.border="1.5px black solid";
    document.getElementById("INPUT_37").style.border="1.5px solid transparent";
    document.getElementById("INPUT_39").style.border="1.5px solid transparent";


    document.getElementById("INPUT_39").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_39").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_39").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }

    document.getElementById("INPUT_37").style.backgroundColor="#0B9840";
    document.getElementById("INPUT_37").onmouseover = function() 
    {
        this.style.backgroundColor = "#188b44";
    }
    document.getElementById("INPUT_37").onmouseout = function() 
    {
        this.style.backgroundColor = "#0B9840";
    }
    document.getElementById("err_msg3").innerHTML="";

}

function calcNewBill()
{
    solar_percent=document.getElementById("range_val").value;
    new_bill=bill*(1-solar_percent/100);
    new_bill=Math.round(new_bill * 100) / 100;
    new_unit=new_bill/tariff;
    new_unit=Math.round(new_unit * 100) / 100;
    saving_on_bill=bill-new_bill;
    saving_on_bill=Math.round(saving_on_bill * 100) / 100;
    saving_on_unit=saving_on_bill/tariff;
    saving_on_unit=Math.round(saving_on_unit* 100) / 100;


}

function changePlaceholder() {

    document.getElementById("INPUT_11").placeholder = "Enter monthy bill(Rs.)";
   choice_bill_unit=0;
}

function changePlaceholderKWH() {
    document.getElementById("INPUT_11").placeholder = "Enter monthy sanctioned load(units)";
    choice_bill_unit=1;
     //console.log(choice_bill_unit);
}

function display() {
    var amount = document.getElementById("INPUT_11").value;
    var location = document.getElementById("INPUT_18").value;
    if ((amount == null || amount == '') && (location == null || location == "Select State")) {
        document.getElementById("err_msg1").innerHTML = "This input is required";
        document.getElementById("err_msg2").innerHTML = "This input is required";
    } else if (amount == null || amount == '') {
        document.getElementById("err_msg1").innerHTML = "This input is required";
    } else if (isNaN(amount)||amount<=0) {
        document.getElementById("err_msg1").innerHTML = "This input must contain valid numeric value";
    } else if (location == "Select State") {
        document.getElementById("err_msg2").innerHTML = "This input is required";
    } 
    else if(flag==0)
    {

        document.getElementById("err_msg3").innerHTML="Please select one category";
    }
        else {
        if(choice_bill_unit==0)
        {
            setTariffBill();
            bill=amount;
            unit=bill/tariff;
            //console.log(unit);
        }
        else
        {
            setTariffUnit();
            unit=amount;
            bill=unit*tariff;
            //System.console(tariff);
            console.log(tariff);
        }
        //clear();
        setSubsidy();
        calcNewBill();
        calcArea();
        myChart.destroy();
        myChart1.destroy();
        document.getElementById("SECTION_2").style.display = "block";
        document.getElementById("SPAN_2").textContent = saving_on_bill;
        graph();
        graph1();
        
    }

}
function calcArea()
{
    var area,size,trees,cars,net_tariff;
    size=saving_on_unit/120;
    area=size*100;
    area=Math.round(area);
    size=Math.round(size * 100) / 100;
    trees=size*35;
    trees=Math.round(trees);
    cars=Math.round(size*0.37);

    document.getElementById("INPUT_29").value=size;
    document.getElementById("INPUT_19").value=area;
    document.getElementById("DATA_126").innerHTML=trees;
    document.getElementById("DATA_134").innerHTML=cars;
    if(size<=3)
    {
        rate=55000;
    }
    else if(size<=10)
    {
        rate=51000;
    }
    else
    {
        rate=49000;
    }
    cost=size*rate;
    after_subsidy_cost=cost*(1-(subsidy_percent/100));
    console.log(after_subsidy_cost);
    console.log(size);
    after_subsidy_cost=Math.round(after_subsidy_cost);
    document.getElementById("SPAN_PAISA").innerHTML=after_subsidy_cost;
    net_tariff=((size*45656)*(0.82));
    console.log(net_tariff*100)/100;
    net_tariff=after_subsidy_cost/net_tariff;

    net_tariff=Math.round(net_tariff*100)/100 ;
    document.getElementById("paisa").innerHTML=net_tariff;


}

function removeErr1() {
    document.getElementById("err_msg1").innerHTML = "";
}

function removeErr2() {
    document.getElementById("err_msg2").innerHTML = "";
}

function graph() {

    

    var ctx = document.getElementById("mm").getContext('2d');
    //Chart.defaults.global.tooltips.enabled = true;
    myChart = new Chart(ctx, {
        type: 'bar',
        
        
        data: {
            labels: [""],
            datasets: [{
                label: 'Current bill',
                data: [bill],
                backgroundColor: "rgba(206, 43, 28,0.8)"
            }, {
                label: 'Bill with solar',
                data: [new_bill],
                backgroundColor: "rgba(5, 178, 89,0.8)"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top',
            },

            scales: {
                xAxes: [{
                    barPercentage: 0.7,
                    gridLines: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true // minimum value will be 0.
                    },
                    gridLines: {
                        display: true
                    }
                }]
            }
        },
        
    });
    

}

function graph1() {


    var ctx = document.getElementById("mm1").getContext('2d');
    Chart.defaults.global.tooltips.enabled = true;
    myChart1 = new Chart(ctx, {
        type:'bar',
        data: {
            labels: [""],
            datasets: [{
                label: 'Original Cost',
                data: [cost],
                backgroundColor: "rgba(206, 43, 28,0.8)"
            }, {
                label: 'After Subsidy',
                data: [after_subsidy_cost],
                backgroundColor: "rgba(5, 178, 89,0.8)"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: 'top',
            },

            scales: {
                xAxes: [{ barPercentage:0.7,
                    gridLines: {
                        display: true
                    }
                }],
                yAxes: [{
                    ticks: {
                        suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                        // OR //
                        beginAtZero: true // minimum value will be 0.
                    },
                    gridLines: {
                        display: true
                    }
                }]
            }
        },
    });

}

function setSubsidy()
{
    var state=document.getElementById("INPUT_18").value;
    if(flag==1)
    {    
        if((state=="Tamil Nadu")||(state=="Rajasthan")||(state=="Gujrat")||(state=="Telangana")||(state=="Andhra Pradesh")|| 
        (state=="Madhya Pradesh")||(state=="Kerala")||(state=="Karnataka")||(state=="Jharkhand")||(state=="Chhattisgarh")||(state=="Punjab")||(state=="Maharashtra")||(state=="Haryana")||(state=="New Delhi")||(state=="Uttar Pradesh")||(state=="Bihar"))
        {
            subsidy_percent=30;
    
        }

        else if((state=="Himachal Pradesh")||(state=="Jammu and Kashmir")||(state=="Uttarakhand"))
        {
            subsidy_percent=70;
        }
        else
        {
            subsidy_percent=0;
        }
    }
    else
    {
        subsidy_percent=0;
    }
}
function showValue(newValue) {
    document.getElementById("range").innerHTML = newValue;

}
function setTariffUnit()
{   
    var unit=document.getElementById("INPUT_11").value;
    var state=document.getElementById("INPUT_18").value;
     console.log(state);
     if(state=="Andaman and Nicobar Islands"){
            if(unit<=100){
                tariff=2;   
            }
            else if(unit<=200){
                tariff=4.25;
            }
            else{
                tariff=6;
            }
    }
    else if(state=="Andhra Pradesh"){
            if(unit<=50){
                tariff=1.45;   
            }
            else if(unit<=100){
                tariff=2.6;
            }
            else if(unit<=200){
                tariff=3.6;
            }
            else{
                tariff=6.9;
            }
    }
   else if(state=="Arunachal Pradesh"){
                tariff=4;
    }
    else if(state=="Assam"){
            if(unit<=120){
                tariff=4.95;   
            }
            else if(unit<=240){
                tariff=6.25;
            }
            else{
                tariff=7.25;
            }
    }
    else if(state=="Bihar"){
            if(unit<=100){
                tariff=3;   
            }
            else if(unit<=200){
                tariff=3.65;
            }
            else if(unit<=300){
                tariff=4.35;
            }
            else{
                tariff=5.45;
            }
    }
    else if(state=="Chandigarh"){
            if(unit<=150){
                tariff=2.55;   
            }
            else if(unit<=400){
                tariff=4.8;
            }
            else{
                tariff=5;
            }
    }
     else if(state=="Chhattisgarh"){
            if(unit<=40){
                tariff=3.6;   
            }
            else if(unit<=200){
                tariff=3.7;
            }
            else if(unit<=600){
                tariff=5.2;
            }
            else{
                tariff=7.25;
            }
    }
    else if(state=="Dadar and Nagar Haveli")
    {
        if(unit<=50){
                tariff=1.1;   
            }
            else if(unit<=200){
                tariff=1.7;
            }
            else if(unit<=400){
                tariff=2.2;
            }
            else{
                tariff=2.5;
            }
    }
    else if(state=="Daman and Diu"){
            if(unit<=50){
                tariff=1.2;   
            }
            else if(unit<=200){
                tariff=1.8;
            }
            else if(unit<=400){
                tariff=2.2;
            }
            else{
                tariff=2.55;
            }
    }
     else if(state=="New Delhi"){
            if(unit<=200){
                tariff=4;   
            }
            else if(unit<=400){
                tariff=5.95;
            }
            else if(unit<=800){
                tariff=7.3;
            }
            else if(unit<=1200){
                tariff=8.1;
            }
            else{
                tariff=8.75;
            }
    }
    else if(state=="Goa"){
            if(unit<=100){
                tariff=1.3;   
            }
            else if(unit<=200){
                tariff=1.9;
            }
            else if(unit<=300){
                tariff=3.4;
            }
            else if(unit<=400){
                tariff=3.1;
            }
            else{
                tariff=3.6;
            }
    }
    else if(state=="Gujrat"){
            if(unit<=50){
                tariff=3.05;   
            }
            else if(unit<=100){
                tariff=3.5;
            }
            else if(unit<=200){
                tariff=4.15;
            }
            else if(unit<=250){
                tariff=4.25;
            }
            else{
                tariff=5.2;
            }
    }
    else if(state=="Haryana"){
            if(unit<=50){
                tariff=2.7;   
            }
            else if(unit<=100){
                tariff=4.5;
            }
            else if(unit<=250){
                tariff=5;
            }
            else if(unit<=500){
                tariff=6.05;
            }
            else{
                tariff=6.75;
            }
    }
     else if(state=="Himachal Pradesh"){
            if(unit<=125){
                tariff=1.5;   
            }
            else if(unit<=300){
                tariff=2.9;
            }
            else{
                tariff=4.35;
            }
    }
     else if(state=="Jammu and Kashmir"){
            if(unit<=100){
                tariff=1.54;   
            }
            else if(unit<=200){
                tariff=2;
            }
            else if(unit<=400){
                tariff=3;
            }
            else{
                tariff=3.2;
            }
    }
     else if(state=="Jharkhand"){
            if(unit<=200){
                tariff=2.6;   
            }
            else{
                tariff=3.1;
            }
    }
    else if(state=="Karnataka"){
            if(unit<=30){
                tariff=3;   
            }
            else if(unit<=100){
                tariff=4.4;
            }
            else if(unit<=200){
                tariff=5.9;
            }
            else{
                tariff=6.9;
            }
    }
    else if(state=="Kerala"){
            if(unit<=50){
                tariff=2.8;   
            }
            else if(unit<=100){
                tariff=3.2;
            }
            else if(unit<=150){
                tariff=4.2;
            }
            else if(unit<=200){
                tariff=5.8;
            }
            else{
                tariff=7;
            }
            
    }
    else if(state=="Lakshadweep"){
            if(unit<=100){
                tariff=1.25;   
            }
            else if(unit<=200){
                tariff=2.75;
            }
            else if(unit<=300){
                tariff=4.4;
            }
            
            else{
                tariff=5.7;
            }
            
    }

    else if(state=="Madhya Pradesh"){
            if(unit<=50){
                tariff=3.65;   
            }
            else if(unit<=100){
                tariff=4.35;
            }
            else if(unit<=300){
                tariff=5.6;
            }
            
            else{
                tariff=6.1;
            }
            
    }
    else if(state=="Maharashtra"){
            if(unit<=100){
                tariff=4.16;   
            }
            else if(unit<=300){
                tariff=7.91;
            }
            else if(unit<=500){
                tariff=10.87;
            }
            
            else if(unit<=1000){
                tariff=12.35;
            }
            else
            {
                tariff=13.63;
            }
            
    }
    else if(state=="Manipur"){
            if(unit<=100){
                tariff=3.2;   
            }
            
            else if(unit<=200){
                tariff=3.8;
            }
            
            else{
                tariff=4.7;
            }
            
    }
    else if(state=="Meghalaya"){
            if(unit<=100){
                tariff=3.15;   
            }
            
            
            else if(unit<=200){
                tariff=3.75;
            }
            else
            {
                tariff=5;
            }
            
    }
    else if(state=="Mizoram"){
            if(unit<=50){
                tariff=2.35;   
            }
            else if(unit<=100){
                tariff=3.25;
            }
            else if(unit<=200){
                tariff=4.2;
            }
            
            
            else
            {
                tariff=4.8;
            }
        

    }
    else if(state=="Nagaland"){
            if(unit<=30){
                tariff=3.5;   
            }
            else if(unit<=100){
                tariff=4.7;
            }
            else if(unit<=250){
                tariff=5.7;
            }
            
            
            else
            {
                tariff=6.5;
            }
            
    }
    else if(state=="Odisha"){
            if(unit<=50){
                tariff=2.5;   
            }
            else if(unit<=200){
                tariff=4.2;
            }
            else if(unit<=400){
                tariff=5.2;
            }
            
            
            else
            {
                tariff=5.6;
            }
            
    }
    else if(state=="Puducherry"){
            if(unit<=100){
                tariff=1.1;   
            }
            else if(unit<=200){
                tariff=1.75;
            }
            else if(unit<=400){
                tariff=3.5;
            }
            
            
            else
            {
                tariff=4.6;
            }
            
    }
    else if(state=="Punjab"){
            if(unit<=100){
                tariff=4.52;   
            }
            
            else if(unit<=300){
                tariff=6.14;
            }
            
            
            else
            {
                tariff=6.56;
            }
            
    }
    else if(state=="Rajasthan"){
            if(unit<=50){
                tariff=3.85;   
            }
            else if(unit<=150){
                tariff=6.1;
            }
            else if(unit<=300){
                tariff=6.4;
            }
            else if(unit<=500){
                tariff=6.7;
            }
            
            else
            {
                tariff=7.15;
            }
            
    }

    else if(state=="Sikkim"){
            if(unit<=50){
                tariff=1.1;   
            }
            else if(unit<=100){
                tariff=2.34;
            }
            else if(unit<=200){
                tariff=3.65;
            }
            else if(unit<=400){
                tariff=4.57;
            }
            
            else
            {
                tariff=4.93;
            }
            
    }

    else if(state=="Tamil Nadu"){
            if(unit<=50){
                tariff=3;   
            }
            else if(unit<=100){
                tariff=3.5;
            }
            else if(unit<=250){
                tariff=4.6;
            }
            
            
            else
            {
                tariff=6.6;
            }
            
    }
    else if(state=="Telangana"){
            if(unit<=50){
                tariff=1.45;   
            }
            else if(unit<=100){
                tariff=2.6;
            }
            else if(unit<=200){
                tariff=4.3;
            }
            else if(unit<=300){
                tariff=7.2;
            }
            else if(unit<=400){
                tariff=8.5;
            }
            else if(unit<=800){
                tariff=9;
            }
            else
            {
                tariff=9.5;
            }
            
    }
    else if(state=="Tripura"){
            if(unit<=50){
                tariff=4.84;   
            }
            else if(unit<=150)
            {
                tariff=5.98;
            
            }
            else if(unit<=300){
                tariff=6.16;
            }
            
            
            else
            {
                tariff=7.2;
            }
            
    }
    else if(state=="Uttar Pradesh"){
            if(unit<=150){
                tariff=4.4;   
            }
            else if(unit<=300)
            {
                tariff=4.95;
            
            }
            else if(unit<=500){
                tariff=5.6;
            }
            
            
            else
            {
                tariff=6.2;
            }
            
    }
    else if(state=="Uttarakhand"){
            if(unit<=100){
                tariff=2.45;   
            }
            else if(unit<=200)
            {
                tariff=3.1;
            }
            
            else if(unit<=300){
                tariff=4.1;
            }
            else if(unit<=400)
            {
                tariff=4.1;
            }
            
            else
            {
                tariff=4.5;
            }
            
    }
    else if(state=="West Bengal"){
            if(unit<=102){
                tariff=5.3;   
            }
            else if(unit<=180)
            {
                tariff=5.97;
            }
            
            else if(unit<=300){
                tariff=6.97;
            }
            else if(unit<=600)
            {
                tariff=7.31;
            }
            
             else if(unit<=900)
            {
                tariff=7.58;
            }
            
            else
            {
                tariff=8.99;
            }
            
    }
}

function setTariffBill()
{   
    var bill=document.getElementById("INPUT_11").value;
    var state=document.getElementById("INPUT_18").value;
     //console.log(state);
     if(state=="Andaman and Nicobar Islands"){
            if(bill<=100*2){
                tariff=2;   
            }
            else if(bill<=200*4.25){
                tariff=4.25;
            }
            else{
                tariff=6;
            }
    }
    else if(state=="Andhra Pradesh"){
            if(bill<=50*1.45){
                tariff=1.45;   
            }
            else if(bill<=100*2.6){
                tariff=2.6;
            }
            else if(bill<=200*3.6){
                tariff=3.6;
            }
            else{
                tariff=6.9;
            }
    }
   else if(state=="Arunachal Pradesh"){
                tariff=4;
    }
    else if(state=="Assam"){
            if(bill<=120*4.95){
                tariff=4.95;   
            }
            else if(bill<=240*6.25){
                tariff=6.25;
            }
            else{
                tariff=7.25;
            }
    }
    else if(state=="Bihar"){
            if(bill<=100*3){
                tariff=3;   
            }
            else if(bill<=200*3.65){
                tariff=3.65;
            }
            else if(bill<=300*4.35){
                tariff=4.35;
            }
            else{
                tariff=5.45;
            }
    }
    else if(state=="Chandigarh"){
            if(bill<=150*2.55){
                tariff=2.55;   
            }
            else if(bill<=400*4.8){
                tariff=4.8;
            }
            else{
                tariff=5;
            }
    }
     else if(state=="Chhattisgarh"){
            if(bill<=40*3.6){
                tariff=3.6;   
            }
            else if(bill<=200*3.7){
                tariff=3.7;
            }
            else if(bill<=600*5.2){
                tariff=5.2;
            }
            else{
                tariff=7.25;
            }
    }
    else if(state=="Daman and Diu"){
            if(bill<=50*1.2){
                tariff=1.2;   
            }
            else if(bill<=200*1.8){
                tariff=1.8;
            }
            else if(bill<=400*2.2){
                tariff=2.2;
            }
            else{
                tariff=2.55;
            }
    }
    else if(state=="Dadar and Nagar Haveli")
    {
        if(bill<=50*1.1){
                tariff=1.1;   
            }
            else if(bill<=200*1.7){
                tariff=1.7;
            }
            else if(bill<=400*2.2){
                tariff=2.2;
            }
            else{
                tariff=2.5;
            }
    }
     else if(state=="New Delhi"){
            if(bill<=200*4){
                tariff=4;   
            }
            else if(bill<=400*5.95){
                tariff=5.95;
            }
            else if(bill<=800*7.3){
                tariff=7.3;
            }
            else if(bill<=1200*8.1){
                tariff=8.1;
            }
            else{
                tariff=8.75;
            }
    }
    else if(state=="Goa"){
            if(bill<=100*1.3){
                tariff=1.3;   
            }
            else if(bill<=200*1.9){
                tariff=1.9;
            }
            else if(bill<=300*3.4){
                tariff=3.4;
            }
            else if(bill<=400*3.1){
                tariff=3.1;
            }
            else{
                tariff=3.6;
            }
    }
    else if(state=="Gujrat"){
            if(bill<=50*3.05){
                tariff=3.05;   
            }
            else if(bill<=100*3.5){
                tariff=3.5;
            }
            else if(bill<=200*4.15){
                tariff=4.15;
            }
            else if(bill<=250*4.25){
                tariff=4.25;
            }
            else{
                tariff=5.2;
            }
    }
    else if(state=="Haryana"){
            if(bill<=50*2.7){
                tariff=2.7;   
            }
            else if(bill<=100*4.5){
                tariff=4.5;
            }
            else if(bill<=250*5){
                tariff=5;
            }
            else if(bill<=500*6.05){
                tariff=6.05;
            }
            else{
                tariff=6.75;
            }
    }
     else if(state=="Himachal Pradesh"){
            if(bill<=125*1.5){
                tariff=1.5;   
            }
            else if(bill<=300*2.9){
                tariff=2.9;
            }
            else{
                tariff=4.35;
            }
    }
     else if(state=="Jammu and Kashmir"){
            if(bill<=100*1.54){
                tariff=1.54;   
            }
            else if(bill<=200*2){
                tariff=2;
            }
            else if(bill<=400*3){
                tariff=3;
            }
            else{
                tariff=3.2;
            }
    }
     else if(state=="Jharkhand"){
            if(bill<=200*2.6){
                tariff=2.6;   
            }
            else{
                tariff=3.1;
            }
    }
    else if(state=="Karnataka"){
            if(bill<=30*3){
                tariff=3;   
            }
            else if(bill<=100*4.4){
                tariff=4.4;
            }
            else if(bill<=200*5.9){
                tariff=5.9;
            }
            else{
                tariff=6.9;
            }
    }
    else if(state=="Kerala"){
            if(bill<=50*2.8){
                tariff=2.8;   
            }
            else if(bill<=100*3.2){
                tariff=3.2;
            }
            else if(bill<=150*4.2){
                tariff=4.2;
            }
            else if(bill<=200*5.8){
                tariff=5.8;
            }
            else{
                tariff=7;
            }
            
    }
    else if(state=="Lakshadweep"){
            if(bill<=100*1.25){
                tariff=1.25;   
            }
            else if(bill<=200*2.75){
                tariff=2.75;
            }
            else if(bill<=300*4.4){
                tariff=4.4;
            }
            
            else{
                tariff=5.7;
            }
            
    }

    else if(state=="Madhya Pradesh"){
            if(bill<=50*3.65){
                tariff=3.65;   
            }
            else if(bill<=100*4.35){
                tariff=4.35;
            }
            else if(bill<=300*5.6){
                tariff=5.6;
            }
            
            else{
                tariff=6.1;
            }
            
    }
    else if(state=="Maharashtra"){
            if(bill<=100*4.16){
                tariff=4.16;   
            }
            else if(bill<=300*7.91){
                tariff=7.91;
            }
            else if(bill<=500*10.87){
                tariff=10.87;
            }
            
            else if(bill<=1000*12.35){
                tariff=12.35;
            }
            else
            {
                tariff=13.63;
            }
            
    }
    else if(state=="Manipur"){
            if(bill<=100*3.2){
                tariff=3.2;   
            }
            
            else if(bill<=200*3.8){
                tariff=3.8;
            }
            
            else{
                tariff=4.7;
            }
            
    }
    else if(state=="Meghalaya"){
            if(bill<=100*3.15){
                tariff=3.15;   
            }
            
            
            else if(bill<=200*3.75){
                tariff=3.75;
            }
            else
            {
                tariff=5;
            }
            
    }
    else if(state=="Mizoram"){
            if(bill<=50*2.35){
                tariff=2.35;   
            }
            else if(bill<=100*3.25){
                tariff=3.25;
            }
            else if(bill<=200*4.2){
                tariff=4.2;
            }
            
            
            else
            {
                tariff=4.8;
            }
        

    }
    else if(state=="Nagaland"){
            if(bill<=30*3.5){
                tariff=3.5;   
            }
            else if(bill<=100*4.7){
                tariff=4.7;
            }
            else if(bill<=250*5.7){
                tariff=5.7;
            }
            
            
            else
            {
                tariff=6.5;
            }
            
    }
    else if(state=="Odisha"){
            if(bill<=50*2.5){
                tariff=2.5;   
            }
            else if(bill<=200*4.2){
                tariff=4.2;
            }
            else if(bill<=400*5.2){
                tariff=5.2;
            }
            
            
            else
            {
                tariff=5.6;
            }
            
    }
    else if(state=="Puducherry"){
            if(bill<=100*1.1){
                tariff=1.1;   
            }
            else if(bill<=200*1.75){
                tariff=1.75;
            }
            else if(bill<=400*3.5){
                tariff=3.5;
            }
            
            
            else
            {
                tariff=4.6;
            }
            
    }
    else if(state=="Punjab"){
            if(bill<=100*4.52){
                tariff=4.52;   
            }
            
            else if(bill<=300*6.14){
                tariff=6.14;
            }
            
            
            else
            {
                tariff=6.56;
            }
            
    }
    else if(state=="Rajasthan"){
            if(bill<=50*3.85){
                tariff=3.85;   
            }
            else if(bill<=150*6.1){
                tariff=6.1;
            }
            else if(bill<=300*6.4){
                tariff=6.4;
            }
            else if(bill<=500*6.7){
                tariff=6.7;
            }
            
            else
            {
                tariff=7.15;
            }
            
    }

    else if(state=="Sikkim"){
            if(bill<=50*1.1){
                tariff=1.1;   
            }
            else if(bill<=100*2.34){
                tariff=2.34;
            }
            else if(bill<=200*3.65){
                tariff=3.65;
            }
            else if(bill<=400*4.57){
                tariff=4.57;
            }
            
            else
            {
                tariff=4.93;
            }
            
    }

    else if(state=="Tamil Nadu"){
            if(bill<=50*3){
                tariff=3;   
            }
            else if(bill<=100*3.5){
                tariff=3.5;
            }
            else if(bill<=250*4.6){
                tariff=4.6;
            }
            
            
            else
            {
                tariff=6.6;
            }
            
    }
    else if(state=="Telangana"){
            if(bill<=50*1.45){
                tariff=1.45;   
            }
            else if(bill<=100*2.6){
                tariff=2.6;
            }
            else if(bill<=200*4.3){
                tariff=4.3;
            }
            else if(bill<=300*7.2){
                tariff=7.2;
            }
            else if(bill<=400*8.5){
                tariff=8.5;
            }
            else if(bill<=800*9){
                tariff=9;
            }
            else
            {
                tariff=9.5;
            }
            
    }
    else if(state=="Tripura"){
            if(bill<=50*4.84){
                tariff=4.84;   
            }
            else if(bill<=150*5.98)
            {
                tariff=5.98;
            
            }
            else if(bill<=300*6.16){
                tariff=6.16;
            }
            
            
            else
            {
                tariff=7.2;
            }
            
    }
    else if(state=="Uttar Pradesh"){
            if(bill<=150*4.4){
                tariff=4.4;   
            }
            else if(bill<=300*4.95)
            {
                tariff=4.95;
            
            }
            else if(bill<=500*5.6){
                tariff=5.6;
            }
            
            
            else
            {
                tariff=6.2;
            }
            
    }
    else if(state=="Uttarakhand"){
            if(bill<=100*2.45){
                tariff=2.45;   
            }
            else if(bill<=200*3.1)
            {
                tariff=3.1;
            }
            
            else if(bill<=300*4.1){
                tariff=4.1;
            }
            else if(bill<=400*4.1)
            {
                tariff=4.1;
            }
            
            else
            {
                tariff=4.5;
            }
            
    }
    else if(state=="West Bengal"){
            if(bill<=102*5.3){
                tariff=5.3;   
            }
            else if(bill<=180*5.97)
            {
                tariff=5.97;
            }
            
            else if(bill<=300*6.97){
                tariff=6.97;
            }
            else if(bill<=600*7.31)
            {
                tariff=7.31;
            }
            
             else if(bill<=900*7.58)
            {
                tariff=7.58;
            }
            
            else
            {
                tariff=8.99;
            }
            
    }
}