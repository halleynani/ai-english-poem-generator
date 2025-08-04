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
    let prompt = 
    `User instructions: Generate a poem in English about ${instructionsInput.value}`;
    let context = 
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title with the poem.";
    let apiURL = 
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



        
axios.get(apiURL).then(displayPoem);
  }
  
  let poemFormElement = document.querySelector("#poem-generator-form");
  poemFormElement.addEventListener("submit", generatePoem);