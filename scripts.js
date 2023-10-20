function myFunction() {
    // Get the text field
    var PhoneNumber = document.getElementById("PhoneNumber").innerText;
    
    navigator.clipboard.writeText(PhoneNumber);

    alert("Copied the text: " + PhoneNumber);
   
}

