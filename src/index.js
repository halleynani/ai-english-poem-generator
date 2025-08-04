function generatePoem(event) {
    event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "La tombe dit a la rose";
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
