// Function to increase font size of text area
function txtBigger() {
    document.getElementById("userText").style.fontSize = "4em";
}

// Function to change the font style of text area
function styleOfApp() {
    let textArea = document.getElementById("userText");

    if (document.getElementById("fancyRadio").checked) {
        alert("FancyShmancy selected!");
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";

    } 
    else if (document.getElementById("boringRadio").checked) {
        alert("BoringBetty selected!");
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// uppercase text and add "-Moo" to the last word of each sentence
function mooifyText() {
    let textArea = document.getElementById("userText");
    let text = textArea.value.toUpperCase();

    // Split the text into sentences
    let sentences = text.split(".");
    
    // Add "-Moo" to the last word of each sentence
    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].trim().split(" ");
        words[words.length - 1] = words[words.length - 1] + "-Moo";
        sentences[i] = words.join(" ");
    }

    // Update the text area with the modified text
    textArea.value = sentences.join(". ");
}
