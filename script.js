// Selecting HTML elements
const getQuoteButton = document.getElementById("get-quote");
const quoteElement = document.getElementById("quote");

// Handling button click
getQuoteButton.addEventListener("click", () => {
  fetch("https://quotes-api-self.vercel.app/quote")
    .then((response) => response.json())
    .then((data) => {
      quoteElement.textContent = `${data.quote} - ${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
});
