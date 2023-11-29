document.getElementById("Bigger").addEventListener("click", biggerText);
document.getElementById("Bigger").addEventListener("click", showHello);
document.getElementById("fancyShmancy").addEventListener("click", applyStyles);
document.getElementById("boringBetty").addEventListener("click", applyStyles);
//document.getElementById("MooButton").addEventListener("click",uppercaseText);
document.getElementById("MooButton").addEventListener("click",addMoo);

function biggerText() {
    
    var textInputsize = document.getElementById("textInput");

    // Change the font size of the text area to 24pt
    textInputsize.style.fontSize = "24pt";
}
function showHello(){
    alert("Hello, world!");
}

function showAlert() {
    alert('Radio button changed!');
}

function applyStyles() {
    var textInput = document.getElementById('textInput');
    var fancyShmancyRadio = document.getElementById('fancyShmancy');
    var BoringBettyRadio = document.getElementById('boringBetty');
    textInput.style.fontWeight = 'bold';
    if (fancyShmancyRadio.checked) {
        textInput.style.color = 'blue';
        textInput.style.textDecoration = 'underline';
    } else if(BoringBettyRadio.checked) {
        textInput.style.color = '';
        textInput.style.textDecoration = '';
    }

}


function addMoo() {
    
    var addMootoText = document.getElementById('textInput');
    var str = addMootoText.value;

    // Split the text into sentences
    var sentences = str.split(".");

    // Add "-moo" to the end of each sentence
    for (var i = 0; i < sentences.length -1 ; i++) {
        sentences[i] = sentences[i].trim() + " -moo"; // Trim to remove leading/trailing spaces
    }

    // Join the sentences back together
    str = sentences.join(".");

    // Set the modified text back to the textarea
    addMootoText.value = str;
    textInput.value = textInput.value.toUpperCase();
}