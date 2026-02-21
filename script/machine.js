
// machine id >> input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}

// machine >> balance
function getBalance(){
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance));
    return Number(balance);
}

// machine >> set balance
function setBalance(value){
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
}

// machine id > hide all > show id
function showOnly(id){
    const addmoney = document.getElementById("add-money");
    const cashout = document.getElementById("cashout");
    const sendmoney = document.getElementById("send-money");
    const transHistory = document.getElementById("history");
    const bonus = document.getElementById("get-bonus");
    const paybill = document.getElementById("pay-bill");
    //console.log(`add money- ${addmoney}, cashout- ${cashout}`);

    //hide all
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");
    sendmoney.classList.add("hidden");
    transHistory.classList.add("hidden");
    bonus.classList.add("hidden")
    paybill.classList.add("hidden");

    // show element of id
    const selectedId = document.getElementById(id);
    selectedId.classList.remove("hidden");
}