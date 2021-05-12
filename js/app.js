// Syftet med denna mini app är att man ska kunna söka på en sång och få fram sångens text.

/* 
Beskrivning av hur jag vill att det ska fungera:
-- Användaren skriver in artist och låt efter hur det är strukturerat i input fältet
-- Användaren klickar därefter på knappen Search
-- Då aktiveras en funktion på knapptrycket som söker på det som matades in i input fältet
-- Därefter så kollas det om det hittades ett resultat eller inte
--- Om inte, så får användaren reda på att inget resultat hittades och att det kan vara så att användaren har skrivit in informationen på fel sätt.
--- Om ett reslutat nås från Api:et så ska detta presenteras under input fältet på ett bra sätt för användaren.

Pseudokod:
-- värdet från inputen matas in i en funktion när användaren trycker på knappen
-- Den funktionen gör ett get anrop till api:et 
-- Därefter är det en if-sats som kollar på om anropet godkändes eller inte, om Ja så presenteras låt-texten om Nej så får användaren veta att det var något fel med sökningnen.

--input.value
--button click 
--funktion som kör get anrop på sökningen
--if sats som avgör vad som presenteras

*/

// hämta in de element som behövs från index.html sidan
const songInput = document.querySelector("#searchForSongInput");
const searchButton = document.querySelector("#searchBtn");
const displayResult = document.querySelector("#resulth2");
const displayLyrics = document.querySelector("#displayLyrics");
console.log(displayResult);

// Denna funktion hämtar det som användaren har skrivit i input fältet, för att funktionen ska aktiveras så behöver användaren klicka på search knappen.
const getUserInput = () => {
  const userInput = songInput.value;
  console.log(userInput);

  fetch(`https://api.lyrics.ovh/v1/${userInput}`)
    .then((response) => {
      return response.json();
    })
    .then((lyrics) => {
      console.log(lyrics);
    });

  fetch(`https://api.lyrics.ovh/v1/${userInput}`).then(function (response) {
    if (response.status === 200) {
      console.log("All god");
      displayResult.innerText = "All good";
      displayLyrics.innerText = response.json;
    } else {
      console.log("Not good");
      displayResult.innerText = "It is something wrong with your search";
    }
  });

  //   fetch(`https://api.lyrics.ovh/v1/${userInput}`);

  //   fetch(`https://api.lyrics.ovh/v1/${userInput}`)
  //     .then((lyrics) => {
  //       console.log(lyrics);
  //     })
  //     .then(function (response) {
  //       if (response.status === 200) {
  //         console.log("All god");
  //         displayResult.innerText = "All good";
  //         displayLyrics.innerText = lyrics;
  //       } else {
  //         console.log("Not good");
  //         displayResult.innerText = "It is something wrong with your search";
  //       }
  //     });
};
searchButton.addEventListener("click", getUserInput);
