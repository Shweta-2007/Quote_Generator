let messageEl = document.querySelector("#message");
let nameEl = document.querySelector("#name");
let btnEl = document.querySelector("#btn");

const quotes=[{
    name:"Steve Jobs",
    message:"Your time is limited, so don't waste it living someone else's life. "
}, {
    name:"Oprah Winfrey",
    message:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."

},  {
    name:"Mahatma Gandhi",
    message:"You must be the change you wish to see in the world."

},  {
    name:"Helen Keller",
    message:"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. "

},  {
    name:"Aristotle",
    message:"It is during our darkest moments that we must focus to see the light."

},  {
    name:"Abraham Lincoln",
    message:"In the end, it's not the years in your life that count. It's the life in your years."

}, {
    name:"Dalai Lama",
    message:"The purpose of our lives is to be happy."

}, {
    name:"Winston S. Churchill",
    message:"Success is not final; failure is not fatal: It is the courage to continue that counts."

}, {
    name:"Albert Einstein",
    message:"Try not to become a man of success. Rather become a man of value."
}];

btnEl.addEventListener("click",function(){

let random = Math.floor(Math.random()*quotes.length);

messageEl.innerText = quotes[random].message;
nameEl.innerText = quotes[random].name;

});
