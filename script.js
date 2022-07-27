// project2.js
// Custom Function
function calculateTip()
{
    // Store data of our inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;


    // Validation
    if(billAmount == 0 || serviceQuality == 0)
    {
        window.alert("Please Enter some values, to find out your tip!");
        return;
    }

    //Check to see if this input is empty or less than or equal to 1
    if(numPeople == 0 || numPeople<=1)
    {
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    // Doing some math!
    var total = (billAmount * serviceQuality)/numPeople;
    total = Math.round(total *100)/100;// Keep decimals to two places
    total = total.toFixed(2); // 10.6 -- 10.60 - always keeps decimal values at 2
    
    // Dislpay the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//Hide the tip amount on load
document.getElementById('totalTip').style.display="none";
document.getElementById('each').style.display="none";

// Clicking the buttons calls our custom Function
document.getElementById('calculate').onclick = function(){ calculateTip();};
