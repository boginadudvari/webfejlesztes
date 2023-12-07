
function foglalas() {

    let veznev = document.getElementById('vezeteknev').value;
    let kernev = document.getElementById('keresztnev').value;
    let nev = veznev.concat(" ", kernev);

    let felszam = document.getElementById('felnottszam').value;
    let gyerszam = document.getElementById('gyerekszam').value;

    let erkezes = document.getElementById('erkezes').value;
    let tavozas = document.getElementById('tavozas').value;


    if (erkezes > tavozas) {
        alert("Hibás időpontokat adott meg")
    return false
    }
    
    else if (erkezes <= tavozas) {
        alert(`Kedves ${nev}! Foglalását rögzítettük ${felszam} főre és ${gyerszam} gyermekre`);
    }
}
