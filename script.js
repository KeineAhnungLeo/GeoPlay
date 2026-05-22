const languageSelection = document.getElementById("language-selection");
const languageIcon = document.getElementById("language-selection-icon");

async function loadLanguage(lang) {
    const response = await fetch(`lang/${lang}.json`)
    const translations = await response.json()

    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[key];
    });

    languageIcon.src = `assets/images/language/${lang}.png`

    localStorage.setItem("language", lang);
}

languageSelection.addEventListener("change", () => {
    loadLanguage(languageSelection.value);
});

const savedLanguage = localStorage.getItem("language") || "en";
languageSelection.value = savedLanguage;
loadLanguage(savedLanguage);