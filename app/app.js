document.addEventListener("DOMContentLoaded", () => {
    
    //DOM ELEMENTS
    const btn = document.querySelector(".advice-btn");
    const quote = document.getElementById("advice-description");
    const titleID = document.querySelector(".advice-title");

    async function updateQuote() {
        // Add animation class
        btn.classList.add('animate');
        quote.classList.add('loading');

        //Fetch a random quote from the https://api.adviceslip.com
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        const slip = data.slip;
        
        if (response.ok) {
            // Update DOM elements
            quote.innerHTML = `<q>${slip.advice}</q>`;
            titleID.textContent = 'ADVICE #: ' + slip.id;
        } else {
            quote.textContent = "An error occurred";
            console.log(data);
        }
        
        // Remove animation class after 2 seconds

        setTimeout(() => {
            btn.classList.remove('animate');
            quote.classList.remove('loading');
        }, 2000);
    }

    //attach an event listener to the 'button'
    btn.addEventListener("click", updateQuote);

    // call updateQuote once when page loads
    updateQuote();
})

