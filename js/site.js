// Get string value from page
// Control
function getValues(){
    let userString = document.getElementById("userString").value;
    return userString;
}

// Reverse the String
// Logic
function reverseString(userString){
    let revString = [];
    // reverse using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];        
    }
    return revString;
}

// Dispaly the Reversed String
// View
function displayString(revString){
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    document.getElementById("alert").classList.remove("invisible");
}

// Main
function main(){
    document.getElementById("alert").classList.add("invisible");
    displayString(reverseString(getValues()));
}