var Instruktor = /** @class */ (function () {
    function Instruktor(ime, prezime, jmbg) {
        this._ime = ime;
        this._prezime = prezime;
        this._jmbg = jmbg;
    }
    Object.defineProperty(Instruktor.prototype, "ime", {
        get: function () {
            return this._ime;
        },
        set: function (value) {
            this._ime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "prezime", {
        get: function () {
            return this._prezime;
        },
        set: function (value) {
            this._prezime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Instruktor.prototype, "jmbg", {
        get: function () {
            return this._jmbg;
        },
        set: function (value) {
            this._jmbg = value;
        },
        enumerable: true,
        configurable: true
    });
    return Instruktor;
}());
/// <reference path="Instruktor.ts" />
var Ispit = /** @class */ (function () {
    function Ispit(instruktor, imeKandidata, prezimeKandidata, nacinPolaganja, datum, brojBodova) {
        this._instruktor = instruktor;
        this._imeKandidata = imeKandidata;
        this._prezimeKandidata = prezimeKandidata;
        this._nacinPolaganja = nacinPolaganja;
        this._datum = datum;
        this._brojBodova = brojBodova;
    }
    Object.defineProperty(Ispit.prototype, "instruktor", {
        /**
         * Getter instruktor
         * @return {Instruktor}
         */
        get: function () {
            return this._instruktor;
        },
        /**
         * Setter instruktor
         * @param {Instruktor} value
         */
        set: function (value) {
            this._instruktor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "imeKandidata", {
        /**
         * Getter imeKandidata
         * @return {string}
         */
        get: function () {
            return this._imeKandidata;
        },
        /**
         * Setter imeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._imeKandidata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "prezimeKandidata", {
        /**
         * Getter prezimeKandidata
         * @return {string}
         */
        get: function () {
            return this._prezimeKandidata;
        },
        /**
         * Setter prezimeKandidata
         * @param {string} value
         */
        set: function (value) {
            this._prezimeKandidata = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "nacinPolaganja", {
        /**
         * Getter nacinPolaganja
         * @return {string}
         */
        get: function () {
            return this._nacinPolaganja;
        },
        /**
         * Setter nacinPolaganja
         * @param {string} value
         */
        set: function (value) {
            this._nacinPolaganja = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "datum", {
        /**
         * Getter datum
         * @return {string}
         */
        get: function () {
            return this._datum;
        },
        /**
         * Setter datum
         * @param {string} value
         */
        set: function (value) {
            this._datum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ispit.prototype, "brojBodova", {
        /**
         * Getter brojBodova
         * @return {number}
         */
        get: function () {
            return this._brojBodova;
        },
        /**
         * Setter brojBodova
         * @param {number} value
         */
        set: function (value) {
            this._brojBodova = value;
        },
        enumerable: true,
        configurable: true
    });
    return Ispit;
}());
/// <reference path="Ispit.ts" />
var AutoSkola = /** @class */ (function () {
    function AutoSkola(naziv) {
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }
    Object.defineProperty(AutoSkola.prototype, "naziv", {
        get: function () {
            return this._naziv;
        },
        set: function (value) {
            this._naziv = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "instruktori", {
        get: function () {
            return this._instruktori;
        },
        set: function (value) {
            this._instruktori = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoSkola.prototype, "ispiti", {
        get: function () {
            return this._ispiti;
        },
        set: function (value) {
            this._ispiti = value;
        },
        enumerable: true,
        configurable: true
    });
    AutoSkola.prototype.dodajIspit = function (ispit) {
        this._ispiti.push(ispit);
    };
    AutoSkola.prototype.refreshIspis = function () {
        var output = "";
        for (var i = 0; i < this._ispiti.length; i++) {
            var klasa = "";
            if (this._ispiti.length > 0 && this._ispiti[i].brojBodova > 55) {
                klasa = "green";
            }
            if (this._ispiti.length > 0 && this._ispiti[i].brojBodova <= 55) {
                klasa = "red";
            }
            output += "     <tr>\n                              <td>" + (i + 1) + "</td>\n                              <td>" + this._ispiti[i].imeKandidata + "</td>\n                              <td>" + this._ispiti[i].instruktor.ime + " " + this._ispiti[i].instruktor.prezime + "</td>\n                              <td>" + this._ispiti[i].nacinPolaganja + "</td>\n                              <td>" + this._ispiti[i].datum + "</td>\n                              <td class=" + klasa + ">" + this._ispiti[i].brojBodova + "</td>\n                            </tr>\n                    ";
        }
        var tableBody = document.getElementById("tbody");
        tableBody.innerHTML = output;
    };
    AutoSkola.prototype.izracunajProlaznostZaInstruktora = function (nacinPolaganja, instruktor) {
        var polozenoIspita = this._ispiti.filter(function (x) { return x.instruktor.jmbg == instruktor.jmbg && x.nacinPolaganja == nacinPolaganja && x.brojBodova > 55; });
        var ukupnoIspita = this._ispiti.filter(function (x) { return x.instruktor.jmbg == instruktor.jmbg && x.nacinPolaganja == nacinPolaganja; });
        var ukupnaProlaznost = (polozenoIspita.length / ukupnoIspita.length) * 100;
        var podaci = document.getElementById("podaci");
        podaci.innerHTML = "<h3>Prolaznost za " + nacinPolaganja + " kod instruktora " + instruktor.ime + " " + instruktor.prezime + " je " + ukupnaProlaznost + " %.</h3>";
        console.log(ukupnoIspita.length);
    };
    AutoSkola.prototype.najboljiInstruktoriPoNacinuPolaganja = function () {
        var polozeniIspiti = this._ispiti.filter(function (x) { return x.brojBodova > 55; });
        var podaci = document.getElementById("podaci");
        var peraPolozenihTeorija = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Pera" && x.nacinPolaganja == "Teorija"; });
        var peraPolozenihPrakticno = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Pera" && x.nacinPolaganja == "Prakticno"; });
        var mikaPolozenihTeorija = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Mika" && x.nacinPolaganja == "Teorija"; });
        var mikaPolozenihPrakticno = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Mika" && x.nacinPolaganja == "Teorija"; });
        var zikaPolozenihTeorija = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Zika" && x.nacinPolaganja == "Teorija"; });
        var zikaPolozenihPrakticno = polozeniIspiti.filter(function (x) { return x.instruktor.ime == "Zika" && x.nacinPolaganja == "Prakticno"; });
        var najboljiPrakticno = Math.max(zikaPolozenihPrakticno.length, mikaPolozenihPrakticno.length, peraPolozenihPrakticno.length);
        var najboljiTeorija = Math.max(zikaPolozenihTeorija.length, mikaPolozenihTeorija.length, peraPolozenihTeorija.length);
        var imePrakticnoNajvisePolozenih = "";
        var imeTeorijaNajvisePolozenih = "";
        if (peraPolozenihPrakticno.length >= mikaPolozenihPrakticno.length && peraPolozenihPrakticno.length >= zikaPolozenihPrakticno.length) {
            imePrakticnoNajvisePolozenih = "Pera Peric";
        }
        else if (mikaPolozenihPrakticno.length >= zikaPolozenihPrakticno.length) {
            imePrakticnoNajvisePolozenih = "Mika Mikic";
        }
        else {
            imePrakticnoNajvisePolozenih = "Zika Zikic";
        }
        if (peraPolozenihTeorija.length >= mikaPolozenihTeorija.length && peraPolozenihTeorija.length >= zikaPolozenihTeorija.length) {
            imeTeorijaNajvisePolozenih = "Pera Peric";
        }
        else if (mikaPolozenihTeorija.length >= zikaPolozenihTeorija.length) {
            imeTeorijaNajvisePolozenih = "Mika Mikic";
        }
        else {
            imeTeorijaNajvisePolozenih = "Zika Zikic";
        }
        podaci.innerHTML = "<h3>Instruktor sa najboljom prolaznosti za teoriju je " + imeTeorijaNajvisePolozenih + " sa ukupno polozenih " + najboljiTeorija + " testova.</h3>\n        <br>\n        <h3>Instruktor sa najboljom prolaznosti za prakticno je  " + imePrakticnoNajvisePolozenih + " sa ukupno polozenih " + najboljiPrakticno + " testova.</h3>\t";
    };
    return AutoSkola;
}());
/// <reference path="AutoSkola.ts" />
var autoSkola;
var aktivanInstruktor;
function promeniAktivnog(selekt) {
    aktivanInstruktor = autoSkola.instruktori.filter(function (el) { return el.jmbg == Number(selekt.value); })[0];
    autoSkola.refreshIspis();
}
function wireEvents() {
    //TODO Implementirati
    document.getElementById("dodajIspit").addEventListener("click", function () {
        var ime = document.getElementById("ime");
        var prezime = document.getElementById("prezime");
        var nacinPolaganja = document.getElementById("nacinPolaganjaSelekt");
        var datum = document.getElementById("datum");
        var brojBodovaTeorija = document.getElementById("teorija");
        var brojBodovaPrakticno = document.getElementById("prakticno");
        var objTeorija = new Ispit(aktivanInstruktor, ime.value, prezime.value, nacinPolaganja.value, datum.value, Number(brojBodovaTeorija.value));
        var objPrakticno = new Ispit(aktivanInstruktor, ime.value, prezime.value, nacinPolaganja.value, datum.value, Number(brojBodovaPrakticno.value));
        if (nacinPolaganja.value == "Prakticno") {
            autoSkola.dodajIspit(objPrakticno);
        }
        else {
            autoSkola.dodajIspit(objTeorija);
        }
        autoSkola.refreshIspis();
    });
    document.getElementById("izracunajProlaznostZaInstruktora").addEventListener("click", function () {
        var selectVal = document.getElementById("nacinPolaganjaSelekt");
        autoSkola.izracunajProlaznostZaInstruktora(selectVal.value, aktivanInstruktor);
    });
    document.getElementById("najboljiInstruktoriPoNacinuPolaganja").addEventListener("click", function () {
        autoSkola.najboljiInstruktoriPoNacinuPolaganja();
    });
}
window.onload = function () {
    //OVDE TESTIRATI KOD
    //-----------------
    //-----------------
    initializeData();
};
//OVAJ KOD OSTAVITI NA DNU STRANICE
function initializeData() {
    autoSkola = new AutoSkola("StopCautionGo");
    var is1 = new Instruktor("Pera", "Peric", 1212975803555);
    var is2 = new Instruktor("Mika", "Mikic", 1501983801238);
    var is3 = new Instruktor("Zika", "Zikic", 2303964184993);
    autoSkola.instruktori = [is1, is2, is3];
    var i11 = new Ispit(is1, "Jovan", "Jovanovic", "Teorija", "2018-02-11", 35);
    var i12 = new Ispit(is1, "Jovan", "Jovanovic", "Prakticno", "2018-03-05", 78);
    var i21 = new Ispit(is1, "Ivan", "Ivanovic", "Teorija", "2018-05-09", 89);
    var i22 = new Ispit(is1, "Ivan", "Ivanovic", "Prakticno", "2018-07-21", 95);
    var i31 = new Ispit(is1, "Dejan", "Dejan", "Teorija", "2018-05-09", 48);
    var i32 = new Ispit(is1, "Dejan", "Dejan", "Prakticno", "2018-07-21", 98);
    var i41 = new Ispit(is2, "Marko", "Markovic", "Teorija", "2018-02-11", 85);
    var i42 = new Ispit(is2, "Marko", "Markovic", "Prakticno", "2018-03-05", 94);
    var i51 = new Ispit(is2, "Nikola", "Nikolic", "Teorija", "2018-05-09", 67);
    var i52 = new Ispit(is2, "Nikola", "Nikolic", "Prakticno", "2018-07-21", 23);
    var i61 = new Ispit(is2, "Luka", "Lukic", "Teorija", "2018-05-09", 83);
    var i62 = new Ispit(is2, "Luka", "Lukic", "Prakticno", "2018-07-21", 51);
    var i71 = new Ispit(is3, "Djordje", "Djordjevic", "Teorija", "2018-02-11", 85);
    var i72 = new Ispit(is3, "Djordje", "Djordjevic", "Prakticno", "2018-03-05", 94);
    var i81 = new Ispit(is3, "Branko", "Brankovic", "Teorija", "2018-05-09", 41);
    var i82 = new Ispit(is3, "Branko", "Brankovic", "Prakticno", "2018-07-21", 21);
    var i91 = new Ispit(is3, "Ognjen", "Ognjenovic", "Teorija", "2018-05-09", 45);
    var i92 = new Ispit(is3, "Ognjen", "Ognjenovic", "Prakticno", "2018-07-21", 55);
    var i101 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Teorija", "2018-05-09", 97);
    var i102 = new Ispit(is3, "Dimitrije", "Dimitrijevic", "Prakticno", "2018-07-21", 99);
    var i111 = new Ispit(is3, "Vladimir", "Vladimirovic", "Teorija", "2018-05-09", 54);
    var i112 = new Ispit(is3, "Vladimir", "Vladimirovic", "Prakticno", "2018-07-21", 17);
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
    var select = document.getElementById("instruktor");
    autoSkola.instruktori.forEach(function (el) {
        select.options.add(new Option(el.ime + " " + el.prezime, el.jmbg.toString()));
    });
    aktivanInstruktor = autoSkola.instruktori[0];
    autoSkola.refreshIspis();
    wireEvents();
}
//# sourceMappingURL=app.js.map