document.getElementById("cashout-btn").addEventListener("click", function () {
    // get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Agent Number");
        return;
    }

    // get the amount
    const cashoutAmount = getValueFromInput("cashout-amount");

    // get the current balance
    const currentBalance = getBalance();

    // Calculate new balance
    const newBalance = currentBalance - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log("new balance:", newBalance);

    // get pin number 
    const pin = getValueFromInput("cashout-pin");
    if (pin === "1236") {
        alert("Cashout Successfull");
        setBalance(newBalance);

         // take history-container
        const history = document.getElementById("history-container");

        // create new div
        const newHistory = document.createElement("div");

        // add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl ">
            Cashout ${cashoutAmount} TAKA Success to
            ${cashoutNumber},  at ${new Date()}
        
        </div>
        `;

        //append newDiv in history-container
        history.append(newHistory);
    }
    else {
        alert("Invalid Pin");
        return;
    }

});






/*document.getElementById("cashout-btn").addEventListener("click", function () {
    //Get the agent number
    const numberCashoutInput = document.getElementById("cashout-number");
    const cashoutNumber = numberCashoutInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }

    // Get the amount
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    // get the current balance
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // Calculate new balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log("new balance:", newBalance);

    // Get the pin number
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if (pin === "1236") {
        alert("Cashout Successfull");
        console.log("new balance:", newBalance);
        balanceElement.innerText = newBalance;
    }
    else {
        alert("Invalid Pin");
        return;
    }
}); */