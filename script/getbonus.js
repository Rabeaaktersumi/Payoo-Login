document.getElementById("get-bonus-btn").addEventListener("click", function(){
    const bonusamount = getValueFromInput("coupon-number");
    if (bonusamount == "123654") {
        alert("Get bonus successfully");
    }
    else{
        alert("Sorry! you don't get any bonus.");
    }
})