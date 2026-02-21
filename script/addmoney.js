document.getElementById("add-money-btn").addEventListener("click", function () {
    // bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select a bank") {
        alert("please select a bank");
        return;
    }

    // get bank account number
    const acno = getValueFromInput("add-money-number");
    if (acno.length != 11) {
        alert("Invalid account number");
        return;
    }

    // get amount

    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance);

    const pin = getValueFromInput("add-money-pin");
    if (pin == "1236") {
        alert(`Add Money Success from ${bankAccount} 
            at ${new Date()} `);
        setBalance(newBalance);

        // take history-container
        const history = document.getElementById("history-container");

        // create new div
        const newHistory = document.createElement("div");

        // add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-xl ">
            Add Money Success from
            ${bankAccount}, ac-no ${acno} at ${new Date()}
        
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