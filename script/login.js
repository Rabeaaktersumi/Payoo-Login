document.getElementById("login-btn").addEventListener("click", function(){
    //get input number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    console.log(contactNumber);

    // get pin number
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value;
    console.log(pin);

    if(contactNumber == "01327962192" && pin == "1236"){
        alert("Login Success");

        window.location.assign("/home.html");
    }
    else{
        alert("Login Failed");
        return;
    }
});