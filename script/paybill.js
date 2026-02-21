document.getElementById("pay-bill-btn").addEventListener("click", function(){
     // bank account get
     const paybank = getValueFromInput("select-pay-bank");
     if(paybank == "select a bank"){
        alert("Please select a bank");
        return;
     }

    // get bank account number
     const paynumber = getValueFromInput("bill-pay-number");
     if(paynumber.length != 11){
        alert("Invalid Account Number");
        return;
     }

    // get amount
    const payamount = getValueFromInput("pay-bill-amount");
    const availalebalance = getBalance();
    const currentamount = availalebalance - Number(payamount);
    console.log(currentamount);
    
    const pin = getValueFromInput("pay-bill-pin");
    if (pin == "1236") {
        alert(`Pay Bill Success from ${paybank} 
            at ${new Date()} `);
        setBalance(currentamount);

        // take history-container
        const history = document.getElementById("history-container");

        // create new div
        const newHistory = document.createElement("div");

        // add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl ">
            Pay Bill Success from
            ${paybank}, ac-no ${paynumber} at ${new Date()}
        
        </div>
        `;

        //append newDiv in history-container
        history.append(newHistory);

    }
    else {
        alert("Invalid pin");
        return;
    }
});