var boje = {
	rucak: "Crimson",
	pice: "Teal"
};

var osobe = [{ime: "Pera", prezime: "Peric"}, {ime: "Marko", prezime: "Markovic"}, 
					{ime: "Jovo", prezime:"Jovic"}];


function proveraForme(forma){
	let retVal = true;
	let proveraOsobe = false;
	osobe.forEach((x) => {
		if(x.ime == forma.ime.value && x.prezime == forma.prezime.value){
			proveraOsobe = true;
		}else{
			return;
		}
	});
	if(forma.ime.value == "" || forma.ime.value[0] != forma.ime.value[0].toUpperCase()){
		retVal = false;
	}
	if(forma.prezime.value == "" || forma.prezime.value[0] != forma.prezime.value[0].toUpperCase()){
		retVal = false;
	}
	return retVal && proveraOsobe;
}



function changeCheck(param){
	let sel = document.getElementById("sel1");
	let sel2 = document.getElementById("sel2");
	if(param.checked){
		sel.disabled = false;
	}else{
		sel.disabled = true;
		sel2.style.visibility = "hidden";
		sel2.disabled = true;
	}

}

function changeVal(param){

	let sel2 = document.getElementById("sel2");
		if(param.value == "3"){
			sel2.disabled = false;
			sel2.style.visibility = "visible"
			console.log(param.value);
		}else{
			sel2.disabled = true;
			sel2.style.visibility = "hidden";
		}
	}


function changeValSel2(param){
	let span = document.querySelector("#select_paragraf").querySelector("span");
	let select = document.getElementById("select_paragraf");
	let submitBtn = document.getElementById("submitbtn"); 
	if(param.value == "rucak"){
		span.innerHTML = param.value;
		select.style.color = boje.rucak;
		submitBtn.style.backgroundColor = boje.rucak;
	}else{
		span.innerHTML = param.value;
		select.style.color = boje.pice;
		submitBtn.style.backgroundColor = boje.pice;
	}
}