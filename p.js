

let heure = document.getElementById("heure");
let minute = document.getElementById("minutes");
let seconde = document.getElementById("seconds"); // Correction de "secondes" en "seconds"
let ampm = document.getElementById("ampm");

function updateHorloge() { // Correction de "updatehorloge" en "updateHorloge" pour respecter la convention de nommage
    let date = new Date(); // Correction de "new Date().getHeures()" en "new Date().getHours()" pour récupérer les heures correctement
    let h = date.getHours(); // Utilisation de la variable "date" pour éviter de créer plusieurs instances de Date()
    let m = date.getMinutes();
    let s = date.getSeconds();
    let am_pm = "AM"; // Changement du nom de la variable "ampm" à "am_pm" pour éviter les confusions

    if (h > 12) {
        h = h - 12;
        am_pm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    heure.innerText = h;
    minute.innerText = m;
    seconde.innerText = s;
    ampm.innerText = am_pm;

    setTimeout(updateHorloge, 1000); // Correction de "updatehorloge" en "updateHorloge" pour appeler la fonction récursivement
}

updateHorloge(); // Appel initial de la fonction pour démarrer la mise à jour de l'horloge
