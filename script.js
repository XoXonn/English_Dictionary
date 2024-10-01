const en_url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("output");
const btn = document.getElementById("search-btn");
const inputfield = document.getElementById("inp");


// Search button
btn.addEventListener("click", () => {
    let inputword = document.getElementById("inp").value;
    fetch(`${en_url}${inputword}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h3>${inputword}</h3>
                </div>
                <div class="word-kind">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});

// Enter Key
inputfield.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        let inputword = document.getElementById("inp").value;
        fetch(`${en_url}${inputword}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                result.innerHTML = `
            <div class="word">
                    <h3>${inputword}</h3>
                </div>
                <div class="word-kind">
                    <p>${data[0].meanings[0].partOfSpeech}</p>
                    <p>/${data[0].phonetic}/</p>
                </div>
                <p class="word-meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <p class="word-example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </p>`;
            })
            .catch(() => {
                result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
            });
    }
});




document.addEventListener('DOMContentLoaded', function () {
    const wordsOfTheDay = [
        {
            word: "Serendipity",
            meaning: "The occurrence of events by chance in a happy or beneficial way.",
            example: "They found each other by pure serendipity."
        },
        {
            word: "Petrichor",
            meaning: "A pleasant smell that frequently accompanies the first rain after a long period of warm, dry weather.",
            example: "The petrichor after the summer rain was refreshing."
        },
        {
            word: "Ephemeral",
            meaning: "Lasting for a very short time.",
            example: "The beauty of the cherry blossoms is ephemeral."
        },
        {
            word: "Euphoria",
            meaning: "A feeling or state of intense excitement and happiness.",
            example: "The euphoria of winning the game was unmatched."
        },
        // Add more words as needed
    ];

    // Select a random word from the array
    const randomWord = wordsOfTheDay[Math.floor(Math.random() * wordsOfTheDay.length)];

    // Output the Word of the Day
    const wordOfDayOutput = `
        <p style><strong>${randomWord.word}</strong></p>
        <p class="meaningofday">${randomWord.meaning}</p>
        <p class="exampleofday"><em>Example: ${randomWord.example}</em></p>
    `;
    document.getElementById('word-of-day-output').innerHTML = wordOfDayOutput;
});


// DarkMode

let darkmode = localStorage.getItem("darkmode");
const themeswitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
}

const disableDarkmode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", "inactive")
}

if (darkmode === "active") {
    enableDarkmode()
} else {
    disableDarkmode()
}


themeswitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
});