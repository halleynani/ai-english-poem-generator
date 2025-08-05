function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      }); 
}






function generatePoem(event) {
    event.preventDefault();




    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "f074c9b4d4608483fc7edf3a88daoetb";
    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);





  
    new Typewriter("#poem", {
      strings: "La tombe dit à la rose",
      autoStart: true,
      delay: 1,
      cursor: "",
    });
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);