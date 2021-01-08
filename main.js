const quote = document.createElement('div');
quote.setAttribute('class', 'fade-in');
quote.setAttribute('id', 'quoteDiv')
quote.style.marginTop = '150px';
quote.style.marginLeft = '20px'
// quote.style.alignContent = 'center';
document.body.appendChild(quote);

const button = document.createElement('button');
button.setAttribute
button.type = 'submit';
button.innerText = "refresh";
document.body.appendChild(button);

const urls = ['https://api.kanye.rest',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Mahatma%20Gandhi',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Jesus%20Christ',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Confucius'
];

function generateQuote() {
    const random = Math.floor(Math.random() * 4);

    fetch(urls[random])
    .then((resp) => resp.json())
    .then((resp) => {
        if (random === 0) {
            quote.innerHTML = resp.quote;
        } else {
            quote.innerHTML = resp.data[0].quoteText;
        } 
    })
    .catch((error) => {
      console.log(error);
    });
}

generateQuote();

button.addEventListener("click", generateQuote);
