let heure = document.getElementById("heure");
let minute = document.getElementById("minutes");
let seconde = document.getElementById("seconds"); 
let ampm = document.getElementById("ampm");

function updateHorloge() { 
    let date = new Date(); 
    let h = date.getHours(); 
    let m = date.getMinutes();
    let s = date.getSeconds();
    let am_pm = "AM"; 

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

    setTimeout(updateHorloge, 1000); 
}

updateHorloge(); 




const input_studies = document.getElementById('input-studies');
const input_experiences = document.getElementById('input-experiences');
const input_other = document.getElementById('input-other');

const section_studies = document.getElementById('studies');
const section_experiences = document.getElementById('experiences');
const section_other = document.getElementById('other');

// Hide all sections
function resetButtons() {
    section_studies.style.display = 'none';
    section_experiences.style.display = 'none';
    section_other.style.display = 'none';
}

// If button is pressed -> hide all sections and show selected section
input_studies.addEventListener('change',  () => {
    if (input_studies.checked) {resetButtons(); section_studies.style.display = 'block'}});

input_experiences.addEventListener('change',  ()=>{
    if (input_experiences.checked) {resetButtons(); section_experiences.style.display = 'block';}});

input_other.addEventListener('change',  ()=>{
    if (input_other.checked) {resetButtons(); section_other.style.display = 'block'}});



    
