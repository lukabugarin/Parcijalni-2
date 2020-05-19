/// <reference path="Ispit.ts" />

class AutoSkola{
    private _naziv: string;
    private _instruktori: Instruktor[];
    private _ispiti: Ispit[];

    constructor(naziv: string){
        this._naziv = naziv;
        this._instruktori = [];
        this._ispiti = [];
    }


  
	public get naziv(): string {
		return this._naziv;
	}

	public get instruktori(): Instruktor[] {
		return this._instruktori;
	}


	public get ispiti(): Ispit[] {
		return this._ispiti;
	}

	public set naziv(value: string) {
		this._naziv = value;
	}

	public set instruktori(value: Instruktor[]) {
		this._instruktori = value;
	}

  
	public set ispiti(value: Ispit[]) {
		this._ispiti = value;
	}

    dodajIspit(ispit: Ispit) {
        this._ispiti.push(ispit);
    }

    refreshIspis() {
       let output: string = ""
        for(let i = 0; i < this._ispiti.length; i++){
            let klasa = "";
            if(this._ispiti.length > 0 && this._ispiti[i].brojBodova > 55){
                klasa = "green";
            }          
            if(this._ispiti.length > 0 && this._ispiti[i].brojBodova <= 55)
            {
                klasa = "red";
            }
            output += `     <tr>
                              <td>${i+1}</td>
                              <td>${this._ispiti[i].imeKandidata}</td>
                              <td>${this._ispiti[i].instruktor.ime} ${this._ispiti[i].instruktor.prezime}</td>
                              <td>${this._ispiti[i].nacinPolaganja}</td>
                              <td>${this._ispiti[i].datum}</td>
                              <td class=${klasa}>${this._ispiti[i].brojBodova}</td>
                            </tr>
                    `;
        }


        let tableBody:HTMLTableElement = document.getElementById("tbody") as HTMLTableElement;
        tableBody.innerHTML = output;
    }

    izracunajProlaznostZaInstruktora(nacinPolaganja: string,instruktor: Instruktor) : void {
        let polozenoIspita = this._ispiti.filter(x => x.instruktor.jmbg == instruktor.jmbg   && x.nacinPolaganja == nacinPolaganja && x.brojBodova > 55);
        let ukupnoIspita = this._ispiti.filter(x => x.instruktor.jmbg == instruktor.jmbg   && x.nacinPolaganja == nacinPolaganja)
       
        let ukupnaProlaznost = (polozenoIspita.length / ukupnoIspita.length) * 100;
        
        let podaci: HTMLElement = document.getElementById("podaci");
        podaci.innerHTML = `<h3>Prolaznost za ${nacinPolaganja} kod instruktora ${instruktor.ime} ${instruktor.prezime} je ${ukupnaProlaznost} %.</h3>`
        console.log(ukupnoIspita.length);
    }
   
    najboljiInstruktoriPoNacinuPolaganja(): void {
        let polozeniIspiti = this._ispiti.filter(x => x.brojBodova > 55);
        let podaci: HTMLElement = document.getElementById("podaci");
        
        let peraPolozenihTeorija = polozeniIspiti.filter(x => x.instruktor.ime == "Pera" && x.nacinPolaganja == "Teorija");
        let peraPolozenihPrakticno = polozeniIspiti.filter(x => x.instruktor.ime == "Pera" && x.nacinPolaganja == "Prakticno");
   
        let mikaPolozenihTeorija = polozeniIspiti.filter(x => x.instruktor.ime == "Mika" && x.nacinPolaganja == "Teorija");
        let mikaPolozenihPrakticno = polozeniIspiti.filter(x => x.instruktor.ime == "Mika" && x.nacinPolaganja == "Teorija");

        let zikaPolozenihTeorija = polozeniIspiti.filter(x => x.instruktor.ime == "Zika" && x.nacinPolaganja == "Teorija");
        let zikaPolozenihPrakticno = polozeniIspiti.filter(x => x.instruktor.ime == "Zika" && x.nacinPolaganja == "Prakticno");

        let najboljiPrakticno = Math.max(zikaPolozenihPrakticno.length,mikaPolozenihPrakticno.length,peraPolozenihPrakticno.length)
        let najboljiTeorija = Math.max(zikaPolozenihTeorija.length,mikaPolozenihTeorija.length,peraPolozenihTeorija.length);


        let imePrakticnoNajvisePolozenih = "";
        let imeTeorijaNajvisePolozenih = "";
        if(peraPolozenihPrakticno.length >= mikaPolozenihPrakticno.length && peraPolozenihPrakticno.length >= zikaPolozenihPrakticno.length){
            imePrakticnoNajvisePolozenih = "Pera Peric";
        }else if (mikaPolozenihPrakticno.length >= zikaPolozenihPrakticno.length){
            imePrakticnoNajvisePolozenih = "Mika Mikic";
        }else {
            imePrakticnoNajvisePolozenih = "Zika Zikic"
        }

        if(peraPolozenihTeorija.length >= mikaPolozenihTeorija.length && peraPolozenihTeorija.length >= zikaPolozenihTeorija.length){
            imeTeorijaNajvisePolozenih = "Pera Peric";
        }else if (mikaPolozenihTeorija.length >= zikaPolozenihTeorija.length){
            imeTeorijaNajvisePolozenih = "Mika Mikic";
        }else {
            imeTeorijaNajvisePolozenih = "Zika Zikic"
        }


        podaci.innerHTML = `<h3>Instruktor sa najboljom prolaznosti za teoriju je ${imeTeorijaNajvisePolozenih} sa ukupno polozenih ${najboljiTeorija} testova.</h3>
        <br>
        <h3>Instruktor sa najboljom prolaznosti za prakticno je  ${imePrakticnoNajvisePolozenih} sa ukupno polozenih ${najboljiPrakticno} testova.</h3>	`;
        
    }
}