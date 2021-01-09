const quote = document.createElement('div');
quote.setAttribute('class', 'fade-in');
quote.style.marginTop = '150px';
quote.style.marginLeft = '20px'
// quote.style.alignContent = 'center';
document.body.appendChild(quote);

let scoreNum = 0;
const score = document.createElement('p');
score.setAttribute('id', 'score');
score.innerHTML = scoreNum;
document.body.appendChild(score);



const btnYe = document.createElement('button');
btnYe.setAttribute('id', 'btn-ye');
btnYe.type = 'submit';
btnYe.innerText = "Ye";
document.body.appendChild(btnYe);

const btnNay = document.createElement('button');
btnNay.setAttribute('id', 'btn-nay');
btnNay.type = 'submit';
btnNay.innerText = "Nay";
document.body.appendChild(btnNay);



const urls = ['https://api.kanye.rest',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Mahatma%20Gandhi',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Jesus%20Christ',
    'https://quote-garden.herokuapp.com/api/v3/quotes/random?author=Confucius'
];

    let random;
function generateQuote() {
    random = Math.floor(Math.random() * 4);

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

function yeVote() {
    if (random === 0) {
      btnYe.style.backgroundColor = 'green';
      scoreNum += 1;
      score.innerHTML = scoreNum;
    } else {
       btnYe.style.backgroundColor = 'red';
    }

    setTimeout(function() { btnYe.style.backgroundColor = '' }, 3000);

    generateQuote();
}

function nayVote() {
    if (random > 0) {
       btnNay.style.backgroundColor = 'green';
       scoreNum += 1;
       score.innerHTML = scoreNum;
    } else {
       btnNay.style.backgroundColor = 'red';
    }

    setTimeout(function() { btnNay.style.backgroundColor = '' }, 3000);

    generateQuote();
}

btnYe.addEventListener("click", yeVote);
btnNay.addEventListener("click", nayVote);



