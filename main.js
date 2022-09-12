
const quoteContainer = document.getElementById("quote-container");
const quoteEl =document.getElementById("quote-el");
const nameEl = document.getElementById("author-el");
const btnEl = document.getElementById("btn-el");
const newEl = document.getElementById("new-quotes");
const loadingEl = document.getElementById("loading-el");





// from APi
let apiQuotes = [];

function loading() {
    quoteContainer.hidden = true;
    loadingEl.hidden = false;
}
function complete() {
    loadingEl.hidden = true;
    quoteContainer.hidden = false;

}
function newQuotes(){
    loading();
    const randomQuote = apiQuotes[Math.floor(Math.random() *apiQuotes.length)];
 


    if(!randomQuote.author){
        nameEl.innerHTML = "unknown";
    }else {
        nameEl.innerHTML = randomQuote.author;
    }

    if(randomQuote.text.length > 50){
        quoteEl.classList.add('long-quote');
    } else{
        quoteEl.classList.remove('long-quote');
    }


   quoteEl.innerHTML = randomQuote.text;
   complete();
}
async function getQuotes(){
    loading();
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        
        newQuotes();
    } catch(error){

    }

function tweetter() {
    const twittUrl = `https://twitter.com/intent/tweet?text= ${nameEl.innerHTML} - ${quoteEl.innerHTML}`;
    window.open(twittUrl, '_blank');

}
newEl.addEventListener("click",newQuotes);
btnEl.addEventListener("click", tweetter);


}
getQuotes();

