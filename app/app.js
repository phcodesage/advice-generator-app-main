 document.addEventListener("DOMContentLoaded", () => {
    
 //DOM ELEMENTS
 const btn = document.querySelector(".advice-btn");
 const quote = document.getElementById("advice-description");
 const titleID = document.querySelector(".advice-title");



 async function updateQuote() {
     //Fetch a random quote from the https://api.adviceslip.com
        
     const response = await fetch('https://api.adviceslip.com/advice');
     const data = await response.json();
     const slip = data.slip;
     if (response.ok) {
         // Update DOM elements
         quote.innerHTML= `<q>${slip.advice}</q>`;
         titleID.textContent = 'ADVICE #: '+ slip.id;
         console.log(slip.advice);
     } else {
         quote.textContent = "An error occured"
        console.log(data);
        }
        
 }
 //attach an event listener to the 'button'
    btn.addEventListener("click", updateQuote);

 // call getAdvice once when page loads

updateQuote();
 })



