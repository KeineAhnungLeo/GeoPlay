const languageSelection = document.getElementById("language-selection");
const languageIcon = document.getElementById("language-selection-icon");

async function loadLanguage(lang) {
    const response = await fetch(`/lang/${lang}.json`)
    const translations = await response.json()

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[key];
    });

    languageIcon.src = `/assets/images/language/${lang}.png`

    localStorage.setItem("language", lang);
}

languageSelection.addEventListener("change", () => {
    loadLanguage(languageSelection.value);
});

const savedLanguage = localStorage.getItem("language") || "en";
languageSelection.value = savedLanguage;
loadLanguage(savedLanguage);



let options = 3;

function addOption(){
    if(options < 6)
        options++;
        document.getElementById("setting-options-counter-number").innerText = options;
}

function removeOption(){
    if(options > 2){
        options--;
        document.getElementById("setting-options-counter-number").innerText = options;
    }
}