const inputText = document.querySelector("#input");
const outputText = document.querySelector("#output");
const btnUpper = document.querySelector(".btn");
const btnLower = document.querySelector(".btn-lower");
const btnCopyText = document.querySelector(".btn-copy");
const btnTitleCase = document.querySelector(".btn-title");
const btnPara = document.querySelector(".btn-para");

const copyText = outputText;

//Events for BOTTONS

//To Uppercase ALL
btnUpper.addEventListener("click", (e) => {
  e.preventDefault();

  outputText.value = inputText.value.toUpperCase();
});

//To Lower ALL

btnLower.addEventListener("click", (e) => {
  e.preventDefault();
  outputText.value = inputText.value.toLowerCase();
});

//To TitleText

btnTitleCase.addEventListener("click", (e) => {
  e.preventDefault();

  function titleCase(str) {
    var splitTitle = str
      .split(/\r?\n/)
      .join(" ")
      .split(" ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.substring(1))
      .join(" ")
      .split(/([.!?])(?= )/g)
      .map((sentence) => sentence.trim())
      .join("")
      .split(/(?<=[.!?])/)
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.substring(1));

    return splitTitle.join(" ");
  }

  outputText.value = titleCase(inputText.value);
});
function capitalizeAt(characters, charAt) {
  var output = characters.map((sentence) => sentence.charAt(charAt).toUpperCase() + sentence.substring(1));
  console.log(output);
  console.log(charAt);
  return output;
}
//To ParagraphMode
btnPara.addEventListener("click", (e) => {
  e.preventDefault();

  function paragraphMode(str) {
    var splitPara = str
      .split(/\r?\n/)
      .join(" ")
      .split(/([.!?])(?= )/g)
      .map((sentence) => sentence.trim())
      .join("")
      .split(/(?<=[.!?])/);
    splitPara = capitalizeAt(splitPara, 0);

    console.log(splitPara);

    return splitPara.join(" ");
  }
  outputText.value = paragraphMode(inputText.value);
});

//Copy to Clipboard
btnCopyText.addEventListener("click", (e) => {
  e.preventDefault();

  var text = outputText.value;
  navigator.clipboard.writeText(text);
  //----execCommand is Deprecated
  // document.execCommand("copy");  
});

//-... -.-- / .-. .- -- . ... .... / -- .- -.. .- .-. .- / .---- ---.. .-.-.- ----- ....- .-.-.- ..--- ...--
