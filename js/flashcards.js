document.getElementById("generateBtn").onclick = async() => {
    const text = document.getElementById("inputText").value;
    const container = document.getElementById("cardsContainer");

    container.innerHTML = "Generating... ⏳";

    try {
        const res = await fetch("https://aivion.onrender.com/api/flashcards", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        const data = await res.json();

        const parsed = JSON.parse(data.result);

        container.innerHTML = "";

        parsed.flashcards.forEach(card => {
            const div = document.createElement("div");
            div.className = "card";

            div.innerHTML = `
                <div class="inner">
                    <div class="front">${card.question}</div>
                    <div class="back">${card.answer}</div>
                </div>
            `;

            container.appendChild(div);
        });

    } catch (err) {
        console.error(err);
        container.innerHTML = "Error generating flashcards ❌";
    }
};
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});