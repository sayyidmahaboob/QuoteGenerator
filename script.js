const quotes = document.getElementById("quote");
const types = document.getElementById("type");

const api_url = "https://hindi-quotes.vercel.app/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  // check for out put
  //   console.log(data);

  quotes.innerHTML = data.quote;
  types.innerHTML = data.type;
  //   type.innerHTML = type.content;
}

getQuote(api_url);

// tweet function

function tweet() {
  window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}
