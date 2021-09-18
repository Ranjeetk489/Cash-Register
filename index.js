var billAmt = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-give");
var checkButton = document.querySelector("#checkButton");
var message = document.querySelector("#message");
var noOfNotes = document.querySelectorAll(".no-Of-Notes");
var cash = document.querySelector("#cash-Given");
var capt = document.querySelector("#capt");
cash.style.display = "none";

const availableNotes = [2000, 500, 100, 20, 10,5,1];
document.getElementById("bill-amount").addEventListener("change",showCashGiven);
checkButton.addEventListener("click" ,function validateCashAmount(){
    hideMessage();
    if(billAmt.value > 0){
        if(cashGiven.value >= billAmt.value){
            var amountToBeReturned = cashGiven.value - billAmt.value;
            calculateChange(amountToBeReturned);
            capt.innerText = "Return Amount  = " + amountToBeReturned;
        } else {
            showMessage("The cash provided should be atleast be equal to the bill");
        }
    } else{
        showMessage("Invalid Bill Amount");
}
});
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
function hideMessage(){
    message.style.display = "none";
}
function calculateChange(amountToBeReturned) {
    for(let i = 0; i < availableNotes.length; i++){
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]
            );
            amountToBeReturned = amountToBeReturned % availableNotes[i];
            noOfNotes[i].innerText = numberOfNotes;
    }
}
function showCashGiven(){
    cash.style.display = "block";
}
// applying the same function with if-else in place of foor loop;
    // var twoK = Math.trunc(amountToBeReturned / 2000);
    // if (twoK >= 1 ){
    //     noOfNotes_1.innerHTML = twoK;   
    // }


    // var newAmount = amountToBeReturned-(2000*twoK);
    // var fiveK = Math.trunc(newAmount / 500);
    // if(fiveK >= 1){
    //    noOfNotes_2.innerHTML  = fiveK; 
    //    amountToBeReturned = newAmount;
    //    newAmount = amountToBeReturned - (500*fiveK);
    // }
    
    // var hundred = Math.trunc(newAmount /100);
    // if(hundred >= 1){
    //     noOfNotes_3.innerHTML = hundred;
    //     amountToBeReturned = newAmount;
    //     newAmount = amountToBeReturned - (100* hundred);
    // }
    
    
    // var twenty = Math.trunc(newAmount / 20);
    // if(twenty >= 1){
    //     noOfNotes_4.innerHTML = twenty;
    //     amountToBeReturned = newAmount;
    //     newAmount = amountToBeReturned - (20* twenty);

    // }
//     var newAmount;
//     var ten = Math.trunc(amountToBeReturned / 10);
//     if(ten >= 1){
//         noOfNotes_5.innerHTML = ten;
//         newAmount = amountToBeReturned - (10* ten);
//     }
//     var five = Math.trunc(newAmount / 5);
//     if(five >= 1){
//         noOfNotes_5.innerText = five; 
//         newAmount = amountToBeReturned - (5*five);
//     }
//     var one = Math.trunc(newAmount / 1);
//     console.log(one)
//     if(one >= 1){
//         noOfNotes_7.innerHTML = one;
//     }
// } 
    