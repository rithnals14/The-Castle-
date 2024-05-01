const bookingForm = document.getElementById("bookingForm");
const bookBtn = document.getElementById("bookBtn");
const bookAdBtn = document.getElementById("bookAdBtn");
const resetCurrentBookingBtn = document.getElementById("currentBookingResetBtn");
const checkLoyaltyBtn = document.getElementById("checkLoyaltyBtn");
const addToFavBtn = document.getElementById("addToFavoriteBtn");

const roomType = document.getElementById("roomType");
const numberOfBeds = document.getElementById("numberOfBeds");
const checkIn = document.getElementById("checkIn");
const checkOut = document.getElementById("checkOut");
const numberOfAdults = document.getElementById("numberOfAdults");
const numberOfChildren = document.getElementById("numberOfChildren");
const timeDuration = document.getElementById("timeDuration");
const wifi = document.getElementById("wifi");
const poolView = document.getElementById("poolView");
const gardenView = document.getElementById("gardenView");
const promoCode = document.getElementById("promoCode");

const loyaltyPointsDiv = document.getElementById("loyaltyPoints");
const bookingDetailsDiv = document.getElementById("bookingDetails");
const currentBookingPriceDiv = document.getElementById("currentBookingPrice");
const overallBookingDiv = document.getElementById("overallBooking");
const overallBookingPriceDiv = document.getElementById("overallBookingPrice");

let loyaltyPoints = 0;
let extraRequirements = [];
let currentBookingPrice = 0;
let overallBookingPrice = 0;

// Extra Requirements
if (wifi.checked) {
	extraRequirements.push(" WiFi");
} else if (wifi.checked = false) {
	extraRequirements.pop(" WiFi");
}

if (poolView.checked) {
	extraRequirements.push(" Pool View");
} else if (poolView.checked = false) {
	extraRequirements.pop(" Pool View");
}

if (gardenView.checked) {
	extraRequirements.push(" Garden View");
} else if (gardenView.checked = false) {
	extraRequirements.pop(" Garden View");
}




bookingForm.addEventListener("submit", function (event) {
	event.preventDefault();
});


var discount = 0;

bookBtn.addEventListener("click", function () {

	var total = 0;

	if(roomType.value === "Single"){
		total+=25000;
	}else if(roomType.value === "Double"){
		total+=35000;
	}else if(roomType.value === "Triple"){
		total+=40000;
	}


	if(numberOfChildren.value != ""){
		var kids_num = parseInt(numberOfChildren.value);
		var kids_total = kids_num*5000;
		total+=kids_total;
	}


	if(numberOfBeds.value != ""){
		var beds = parseInt(numberOfBeds.value);
		var beds_total = beds*8000;
		total+=beds_total;
	}

	if(promoCode.value === "Promo123"){
		discount = total*(5/100);
		total = total-discount;
	}
	
	bookingDetailsDiv.innerHTML = 
	"<p>Room Type: " + roomType.value 
	+ "</p><p>Number of Rooms: " + numberOfBeds.value + 
	"</p><p>Check In Date: " 
	+ checkIn.value + "</p><p>Check Out Date: " + checkOut.value 
	+ "</p><p>Number of Adults: " + numberOfAdults.value 
	+ "</p><p>Number of Children: " + numberOfChildren.value 
	+ "</p><p>Time Duration: " + timeDuration.value 
	+ " Days</p><p>Extra Requirements:" + extraRequirements 
	+ "</p><br>"
	+"<p>Discount: "+discount+"</p>"
	+"<p>Cost of the Current Booking:"+total+"</p>";
	// currentBookingPriceDiv.innerHTML = "<p> " + currentBookingPrice + "</p>";
	overallBookingDiv.innerHTML = localStorage.getItem("overallBookingDiv");
	overallBookingPriceDiv.innerHTML = "<p>" + localStorage.getItem("overallBookingPrice") + "</p>";
	if (overallBookingPriceDiv.innerHTML == "<p>null</p>") {
		overallBookingPriceDiv.innerHTML = "<p>0</p>";
	}
});

resetCurrentBookingBtn.addEventListener("click", function () {
	window.location.reload();
	extraRequirements = [];
});

checkLoyaltyBtn.addEventListener("click", function () {
	if (numberOfBeds.value >= 3) {
		loyaltyPoints = 20*numberOfBeds.value;
	} else if (numberOfBeds.value < 3) {
		loyaltyPoints = 'No Loyalty Points';
	}
	loyaltyPointsDiv.innerHTML = loyaltyPoints;
});


addToFavBtn.addEventListener("click", function () {
	overallBookingDiv.innerHTML += bookingDetailsDiv.innerHTML;
	localStorage.setItem("overallBookingDiv", overallBookingDiv.innerHTML);
	localStorage.setItem("overallBookingPrice", overallBookingPrice += currentBookingPrice);
	alert("adder to favorites")
});