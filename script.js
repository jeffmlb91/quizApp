// Declaring a variable
let appContainer = document.getElementById("app-container");

const newElement = (() => {
  const displayIntro = () => {
    //card element
    let card = document.createElement("div");
    card.classList.add("card");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = "Card title";
    cardBody.appendChild(cardTitle);

    let cardSubtitle = document.createElement("h6");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.classList.add("mb-2");
    cardSubtitle.classList.add("text-muted");

    cardSubtitle.textContent = "Card Subtitle";

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = "This is some text that we will be using ";

    let startButton = document.createElement("button");
    startButton.classList.add("btn");
    startButton.classList.add("btn-success");
    startButton.textContent = "start";

    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(startButton);
    card.appendChild(cardBody);
    appContainer.appendChild(card);
  };

  return {
    displayIntro,
  };
})();
