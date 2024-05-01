
const bookAdBtn = document.getElementById("bookAdBtn");
const numberOfAD = document.getElementById("numberOfAD");
const numberOfKD = document.getElementById("numberOfKD");
const AdContent = document.getElementById("AdContent");



bookAdBtn.addEventListener("click", function (event) {
	var foreign = document.getElementById('foreign').checked;
	var adult_price_total = 0;
	var kids_price_total = 0;
	if(foreign){
		if(numberOfAD.value != ""){
			adult_price_total = parseInt(numberOfAD.value)*10000;
		}
		if(numberOfKD.value != ""){
			kids_price_total = parseInt(numberOfKD.value)*5000;
		}
	}else{
		if(numberOfAD.value != ""){
			adult_price_total = parseInt(numberOfAD.value)*5000;
		}
		if(numberOfKD.value != ""){
			kids_price_total = parseInt(numberOfKD.value)*2000;
		}
	}

	AdContent.innerHTML = "<br><p>Adult Price Total: "+adult_price_total+"</p><br>"+"<p>Kids Price Total: "+kids_price_total+"</p><br>";
});

