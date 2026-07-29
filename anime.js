const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const diceBtn = document.getElementById("dice-btn");

async function getAdvice() {
    diceBtn.classList.add("rotate");
    try {
        const response = await fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`);
        const data = await response.json();

        const id = data.slip.id;
        const text = data.slip.advice;

        adviceId.textContent = `Advice #${id}`;
        adviceText.textContent = `"${text}"`;
        

    } catch (error) {
        adviceText.textContent = "Oops! Something went wrong. Please try again.";
    }
    setTimeout(() => {
        diceBtn.classList.remove("rotate");
    },600);
}

diceBtn.addEventListener("click", getAdvice);