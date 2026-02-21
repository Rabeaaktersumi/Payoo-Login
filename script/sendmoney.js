document.getElementById("send-money-btn").addEventListener("click", function(){
    // get the agent number & validate
    const userNumber = getValueFromInput("user-number");
    if (userNumber.length != 11) {
        alert("Invalid User Number");
        return;
    }

    //get amount
    const sendMoney = getValueFromInput("send-amount");

    const currentBalance = getBalance();
    
    // Calculate new balance
    const newBalance = currentBalance - Number(sendMoney);
    if (newBalance < 0) {
        alert("Invalid Amount");
        return;
    }
    console.log("new balance:", newBalance);

     // get pin number 
    const pin = getValueFromInput("send-money-pin");
    if (pin === "1236") {
        alert("Send Money Successfull");
        setBalance(newBalance);

         // take history-container
        const history = document.getElementById("history-container");

        // create new div
        const newHistory = document.createElement("div");

        // add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl ">
            Send ${sendMoney} TAKA Success from
            ${userNumber},  at ${new Date()}
        
        </div>
        `;

        //append newDiv in history-container
        history.append(newHistory);
    }
    else {
        alert("Invalid Pin");
        return;
    }

})