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

      .map((word) => word.charAt(0).toUpperCase() + word.substring(1));

    return splitTitle.join(" ");
  }

  outputText.value = titleCase(inputText.value);
});


//To ParagraphMode
btnPara.addEventListener("click", (e) => {
  e.preventDefault();

  function paragraphMode(str) {
    var splitPara = str
      .split(/\r?\n/)
      .join(" ")
      .split(". ")

      .map(
        (sentence) => sentence.charAt(0).toUpperCase() + sentence.substring(1)
      );

    return splitPara.join(". ");
  }
  outputText.value = paragraphMode(inputText.value);
});

//Copy to Clipboard
btnCopyText.addEventListener("click", (e) => {
  e.preventDefault();
  copyText.select();
  document.execCommand("copy");
});

//-... -.-- / .-. .- -- . ... .... / -- .- -.. .- .-. .- / .---- ---.. .-.-.- ----- ....- .-.-.- ..--- ...--