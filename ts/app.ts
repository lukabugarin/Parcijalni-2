/// <reference path="AutoSkola.ts" />

let autoSkola: AutoSkola;
let aktivanInstruktor: Instruktor;

function promeniAktivnog(selekt: HTMLSelectElement): void {
    aktivanInstruktor = autoSkola.instruktori.filter(el => el.jmbg == Number(selekt.value))[0];
    autoSkola.refreshIspis();
}

function wireEvents(): void {
   //TODO Implementirati
   document.getElementById("dodajIspit").addEventListener("click", () => {
       let ime : HTMLInputElement = document.getElementById("ime") as HTMLInputElement;
       let prezime : HTMLInputElement = document.getElementById("prezime") as HTMLInputElement;
       let nacinPolaganja: HTMLSelectElement = document.getElementById("nacinPolaganjaSelekt") as HTMLSelectElement;
       let datum: HTMLInputElement = document.getElementById("datum") as HTMLInputElement;
       let brojBodovaTeorija: HTMLInputElement = document.getElementById("teorija") as HTMLInputElement;
       let brojBodovaPrakticno: HTMLInputElement = document.getElementById("prakticno") as HTMLInputElement;
       
        let objTeorija = new Ispit(aktivanInstruktor,ime.value,prezime.value,nacinPolaganja.value,datum.value,Number(brojBodovaTeorija.value));
        let objPrakticno = new Ispit(aktivanInstruktor,ime.value,prezime.value,nacinPolaganja.value,datum.value,Number(brojBodovaPrakticno.value));

        if(nacinPolaganja.value == "Prakticno"){
            autoSkola.dodajIspit(objPrakticno);
        }else{
            autoSkola.dodajIspit(objTeorija);
        }
       
        autoSkola.refreshIspis();
    });

    document.getElementById("izracunajProlaznostZaInstruktora").addEventListener("click", () => {
        let selectVal: HTMLSelectElement = document.getElementById("nacinPolaganjaSelekt") as HTMLSelectElement;

        autoSkola.izracunajProlaznostZaInstruktora(selectVal.value,aktivanInstruktor);
    });

    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click", () => {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    })
}











window.onload = () => {
    //OVDE TESTIRATI KOD
    //-----------------
    


    //-----------------
    initializeData();
}


//OVAJ KOD OSTAVITI NA DNU STRANICE
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    let is1 = new Instruktor("Pera", "Peric", 1212975803555);
    let is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    let is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];

    let i11 = new Ispit(is1, "Jovan", "Jovanovic", "Teorija", "2018-02-11", 35);
    let i12 = new Ispit(is1, "Jovan", "Jovanovic", "Prakticno", "2018-03-05", 78);
    let i21 = new Ispit(is1, "Ivan", "Ivanovic", "Teorija", "2018-05-09", 89);
    let i22 = new Ispit(is1, "Ivan", "Ivanovic", "Prakticno", "2018-07-21", 95);
    let i31 = new Ispit(is1, "Dejan", "Dejan", "Teorija", "2018-05-09", 48);
    let i32 = new Ispit(is1, "Dejan", "Dejan", "Prakticno", "2018-07-21", 98);
    
    let i41 = new Ispit(is2, "Marko", "Markovic", "Teorija", "2018-02-11", 85);
    let i42 = new Ispit(is2, "Marko", "Markovic", "Prakticno", "2018-03-05", 94);
    let i51 = new Ispit(is2, "Nikola", "Nikolic", "Teorija", "2018-05-09", 67);
    let i52 = new Ispit(is2, "Nikola", "Nikolic", "Prakticno", "2018-07-21", 23);
    let i61 = new Ispit(is2, "Luka", "Lukic", "Teorija", "2018-05-09", 83);
    let i62 = new Ispit(is2, "Luka", "Lukic", "Prakticno", "2018-07-21", 51);

    let i71 = new Ispit(is3, "Djordje", "Djordjevic", "Teorija", "2018-02-11", 85);
    let i72 = new Ispit(is3, "Djordje", "Djordjevic", "Prakticno", "2018-03-05", 94);
    let i81 = new Ispit(is3, "Branko", "Brankovic", "Teorija", "2018-05-09", 41);
    let i82 = new Ispit(is3, "Branko", "Brankovic", "Prakticno", "2018-07-21", 21);
    let i91 = new Ispit(is3, "Ognjen", "Ognjenovic", "Teorija", "2018-05-09", 45);
    let i92 = new Ispit(is3, "Ognjen", "Ognjenovic", "Prakticno", "2018-07-21", 55);
    let i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Teorija", "2018-05-09", 97);
    let i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Prakticno", "2018-07-21", 99);
    let i111 = new Ispit(is3, "Vladimir", "Vladimirovic", "Teorija", "2018-05-09", 54);
    let i112 = new Ispit(is3, "Vladimir", "Vladimirovic", "Prakticno", "2018-07-21", 17);

    autoSkola.dodajIspit(i11);
    autoSkola.dodajIspit(i12);
    autoSkola.dodajIspit(i21);
    autoSkola.dodajIspit(i22);
    autoSkola.dodajIspit(i31);
    autoSkola.dodajIspit(i32);
    autoSkola.dodajIspit(i41);
    autoSkola.dodajIspit(i42);
    autoSkola.dodajIspit(i51);
    autoSkola.dodajIspit(i52);
    autoSkola.dodajIspit(i61);
    autoSkola.dodajIspit(i62);
    autoSkola.dodajIspit(i71);
    autoSkola.dodajIspit(i72);
    autoSkola.dodajIspit(i81);
    autoSkola.dodajIspit(i82);
    autoSkola.dodajIspit(i91);
    autoSkola.dodajIspit(i92);
    autoSkola.dodajIspit(i101);
    autoSkola.dodajIspit(i102);
    autoSkola.dodajIspit(i111);
    autoSkola.dodajIspit(i112);

    let select: HTMLSelectElement = document.getElementById("instruktor") as HTMLSelectElement;
    autoSkola.instruktori.forEach(el => {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });

    aktivanInstruktor = autoSkola.instruktori[0];

    autoSkola.refreshIspis();
    wireEvents();

}