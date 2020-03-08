
class CalculateComp {
	constructor(
		internet = 0,
		tv = 0,
		phone = 10,
		protect = 45,
		tier = 1,
		amount = 0,
		qtyPhone = 0,
		qtyTestDrive = 0,
		qtyYourTV = 0,
		qtyMostTV = 0,
		qtyMoreTV = 0,
		qtyMundo = 0,
		qtyMundoTotal = 0,
		internet100 = 0,
		internet200 = 20,
		internet400 = 0,
		internetGig = 0,
		yourFiosTV = 0,
		wireless = 60,
		qty100 = 0,
		qty200 = 0,
		qty400 = 0,
		qtyGig = 0,
		qtyWireless = 0,
		qtyProtect = 0,
		moreFiosTV = 0,
		mostFiosTv = 0,
		testDrive = 0,
		mundo = 0,
		mundoTotal = 0,
		baseSalary = 0,
		showBase = false
	) {
		this.internet = internet;
		this.baseSalary = baseSalary;
		this.tv = tv;
		this.showBase = showBase;
		this.phone = phone;
		this.protect = protect;

		this.tier = tier;
		this.internet100 = internet100;
		this.internet200 = internet200;
		this.internet400 = internet400;
		this.internetGig = internetGig;
		this.mundo = mundo;
		this.mostFiosTv = mostFiosTv;
		this.moreFiosTv = moreFiosTV;
		this.mundoTotal = mundoTotal;
		this.amount = amount;
		this.yourFiosTV = yourFiosTV;
		this.testDrive = testDrive;
		this.qty100 = qty100;
		this.qty200 = qty200;
		this.wireless = wireless;
		this.qtyWireless = qtyWireless;
		this.qty400 = qty400;
		this.qtyGig = qtyGig;
		this.qtyPhone = qtyPhone;
		this.qtyMundo = qtyMundo;
		this.qtyProtect = qtyProtect;
		this.qtyMundoTotal = qtyMundoTotal;
		this.qtyTestDrive = qtyTestDrive;
		this.qtyYourTV = qtyYourTV;
		this.qtyMostTV = qtyMostTV;
		this.qtyMoreTV = qtyMoreTV;
		
	}

	addInternet100() {
		this.internet++;
		this.qty100++;
		this.checkForTierAndRecalculate();
	}

	addInternet200() {
		this.internet++;
		this.qty200++;
		this.checkForTierAndRecalculate();
	}

	// ADD AN INTERNET UNIT OF 400/400
	addInternet400() {
		this.internet++;
		this.qty400++;
		this.checkForTierAndRecalculate();
	}

	addInternetGig() {
		this.internet++;
		this.qtyGig++;
		this.checkForTierAndRecalculate();
	}

	//ADD A TV

	addTestDrive() {
		this.tv++;
		this.qtyTestDrive++;
		this.checkForTierAndRecalculate();
	}

	removeTestDrive() {
		if (this.qtyTestDrive > 0) {
			this.tv--;
			this.qtyTestDrive--;
			this.checkForTierAndRecalculate();
		}
	}

	addMundo() {
		this.tv++;
		this.qtyMundo++;
		this.checkForTierAndRecalculate();
	}

	removeMundo() {
		if (this.qtyMundo > 0) {
			this.tv--;
			this.qtyMundo--;
			this.checkForTierAndRecalculate();
		}
	}

	addMundoTotal() {
		this.tv++;
		this.qtyMundoTotal++;
		this.checkForTierAndRecalculate();
	}

	removeMundoTotal() {
		if (this.qtyMundoTotal > 0) {
			this.tv--;
			this.qtyMundoTotal--;
			this.checkForTierAndRecalculate();
		}
	}

	addYourTV() {
		this.tv++;
		this.qtyYourTV++;
		this.checkForTierAndRecalculate();
	}

	removeYourTV() {
		if (this.tv > 0) {
			this.tv--;
			this.qtyYourTV--;
			this.checkForTierAndRecalculate();
		}
	}

	addMostTV() {
		this.tv++;
		this.qtyMostTV++;
		this.checkForTierAndRecalculate();
	}
	removeMostTV() {
		if (this.qtyMostTV > 0) {
			this.tv--;
			this.qtyMostTV--;
			this.checkForTierAndRecalculate();
		}
	}

	addMoreTV() {
		this.tv++;
		this.qtyMoreTV++;
		this.checkForTierAndRecalculate();
	}

	removeMoreTV() {
		if (this.qtyMoreTV > 0) {
			this.tv--;
			this.qtyMoreTV--;
			this.checkForTierAndRecalculate();
		}
	}

	// ADD A PHONE LINE
	addPhone() {
		this.qtyPhone++;
	}

	// ADD A PHONE LINE
	removePhone() {
		if (this.qtyPhone > 0) {
			this.qtyPhone--;
			this.checkForTierAndRecalculate();
		}
	}

	remove100() {
		if (this.qty100 > 0) {
			this.internet--;
			this.qty100--;
			this.checkForTierAndRecalculate();
		}
	}

	remove200() {
		if (this.qty200 > 0) {
			this.internet--;
			this.qty200--;
			this.checkForTierAndRecalculate();
		}
	}

	remove400() {
		if (this.qty400 > 0) {
			this.internet--;
			this.qty400--;

			this.checkForTierAndRecalculate();
		}
	}

	removeGig() {
		if (this.qtyGig > 0) {
			this.internet--;
			this.qtyGig--;
			this.checkForTierAndRecalculate();
		}
	}

	addWireless() {
		this.qtyWireless++;
		//this.checkForTierAndRecalculate();
	}

	removeWireless() {
		if (this.qtyWireless > 0) {
			this.qtyWireless--;
		}
	}

	addProtect() {
		this.qtyProtect++;
	}

	removeProtect() {
		if (this.qtyProtect > 0) {
			this.qtyProtect--;
		}
	}

	checkForTierAndRecalculate() {
		if (this.internet >= 0 && this.internet <= 8) {
			this.tier = 1;
		}
		if (this.internet >= 9 && this.internet <= 14) {
			this.tier = 2;
		}

		if (this.internet >= 15) {
			this.tier = 3;
		}

		if (this.tier === 1) {
			this.internet100 = 20;
			this.internet200 = 20;
			this.internet400 = 35;
			this.internetGig = 50;
			this.mundo = 10;
			this.mundoTotal = 10;
			this.moreFiosTv = 15;
			this.testDrive = 20;
			this.mostFiosTv = 30;
			this.yourFiosTV = 15;
		} else if (this.tier === 2) {
			this.internet100 = 40;
			this.internet200 = 40;
			this.internet400 = 55;
			this.internetGig = 70;
			this.mundo = 25;
			this.mundoTotal = 25;
			this.moreFiosTv = 30;
			this.testDrive = 30;
			this.mostFiosTv = 40;
			this.yourFiosTV = 25;
		} else if (this.tier === 3) {
			this.internet100 = 50;
			this.internet200 = 50;
			this.internet400 = 70;
			this.internetGig = 85;
			this.mundo = 30;
			this.mundoTotal = 30;
			this.moreFiosTv = 35;
			this.testDrive = 40;
			this.mostFiosTv = 50;
			this.yourFiosTV = 30;
		}
	}

	recalculate() {
		this.amount = this.getAmount + this.baseSalary;
	}

	get totalUnits() {
		return this.internet + this.tv;
	}

	get getAmount() {
		let amt = 0;
		let internet =
			this.internet100 * this.qty100 +
			this.internet200 * this.qty200 +
			this.internet400 * this.qty400 +
			this.internetGig * this.qtyGig;
		let tv =
			this.mostFiosTv * this.qtyMostTV +
			this.moreFiosTv * this.qtyMoreTV +
			this.mundo * this.qtyMundo +
			this.mundoTotal * this.qtyMundoTotal +
			this.yourFiosTV * this.qtyYourTV +
			this.testDrive * this.qtyTestDrive;
		let phone = this.phone * this.qtyPhone;
		let wireless = this.wireless * this.qtyWireless;
		let protect = this.protect * this.qtyProtect;
		amt = internet + phone + tv + wireless + protect;

		return amt;
	}
	get internetAmount() {
		return (
			this.internet100 * this.qty100 +
			this.internet200 * this.qty200 +
			this.internet400 * this.qty400 +
			this.internetGig * this.qtyGig
		);
	}
	get tvAmount() {
		return (
			this.mostFiosTv * this.qtyMostTV +
			this.moreFiosTv * this.qtyMoreTV +
			this.mundo * this.qtyMundo +
			this.mundoTotal * this.qtyMundoTotal +
			this.yourFiosTV * this.qtyYourTV +
			this.testDrive * this.qtyTestDrive
		);
	}

	resetAll() {
		this.internet = 0;
		this.tv = 0;
		this.phone = 10;
		this.tier = 1;
		this.internet100 = 0;
		this.internet200 = 0;
		this.internet400 = 0;
		this.internetGig = 0;
		this.mundo = 0;
		this.mostFiosTv = 0;
		this.moreFiosTv = 0;
		this.mundoTotal = 0;
		this.amount = 0;
		this.yourFiosTV = 0;
		this.testDrive = 0;
		this.qty100 = 0;
		this.qty200 = 0;
		this.qty400 = 0;
		this.qtyGig = 0;
		this.qtyPhone = 0;
		this.qtyMundo = 0;
		this.qtyMundoTotal = 0;
		this.qtyTestDrive = 0;
		this.qtyWireless = 0;
		this.qtyYourTV = 0;
		this.qtyMostTV = 0;
		this.qtyMoreTV = 0;
		this.qtyProtect = 0;
		this.baseSalary = 0;
		this.showBase = false;
		window.location.reload();
	}
}

const earnings = document.querySelector("#earnings");
const btnPlus = document.querySelector("#addGigabit");
const gigQty = document.getElementById("gigQty");
const tier = document.getElementById("tier");
const tier1 = document.getElementById("tier1");
const qty100 = document.getElementById("qty100");
const qty200 = document.getElementById("qty200");
const qty400 = document.getElementById("qty400");
const qtyTestDtive = document.getElementById("qtyTestDrive");
const qtyYourTV = document.getElementById("qtyYourTV");
const qtyMoreTV = document.getElementById("qtyMoreTV");
const qtyMostTV = document.getElementById("qtyMostTV");
const qtyPhone = document.getElementById("qtyPhone");
const qtyMundo = document.getElementById("qtyMundo");
const qtyWireless = document.getElementById("qtyWireless");
const qtyMundoTotal = document.getElementById("qtyMundoTotal");

const qtyProtect = document.getElementById("qtyProtect");

const spanInt = document.getElementById("spanInt");
const spanTV = document.getElementById("spanTV");
const spanProtect = document.getElementById("spanProtect");
const spanPhone = document.getElementById("spanPhone");
const spanWireless = document.getElementById("spanWireless");
const mainCard = document.getElementById("mainCard");
const spanTier = document.getElementById("tier1");
const parag = document.getElementById("parag");

const myApp = new CalculateComp();

function resetAll() {
	myApp.resetAll();
}

function reload() {
	myApp.recalculate();
	if (myApp.internet > 0) {
		tier.innerText = `${"Tier "} ${myApp.tier}`;
	} else {
		tier.innerText = `${"Tier 0"}`;
	}

	if (myApp.tier === 2) {
		mainCard.style.backgroundColor = "#2ecc71";
		mainCard.className = "animated flipInX card";
		parag.style.display = "block";
		spanTier.innerText = "2";
	} else if (myApp.tier === 1) {
		mainCard.style.backgroundColor = "#ecf0f1";
		mainCard.className = "card";
		parag.style.display = "none";
	} else if (myApp.tier === 3) {
		mainCard.style.backgroundColor = "#1abc9c";
		mainCard.className = "animated lightSpeedIn card";
		spanTier.innerText = "3";
	} else {
		parag.style.display = "none";
	}
	earnings.textContent = `$${myApp.amount.toFixed(2)}`;
	gigQty.innerText = `${myApp.qtyGig}`;
	qty100.innerText = `${myApp.qty100}`;
	qty200.innerText = `${myApp.qty200}`;
	qty400.innerText = `${myApp.qty400}`;
	qtyProtect.innerText = `${myApp.qtyProtect}`;
	qtyTestDtive.innerText = `${myApp.qtyTestDrive}`;
	qtyYourTV.innerText = `${myApp.qtyYourTV}`;
	qtyMoreTV.innerText = `${myApp.qtyMoreTV}`;
	qtyMostTV.innerText = `${myApp.qtyMostTV}`;
	spanInt.innerText = `${myApp.internet}`;
	spanTV.innerText = `${myApp.tv}`;
	spanProtect.innerText = `${myApp.qtyProtect}`;
	spanPhone.innerText = `${myApp.qtyPhone}`;
	spanWireless.innerText = `${myApp.qtyWireless}`;
	qtyPhone.innerText = `${myApp.qtyPhone}`;
	qtyWireless.innerText = `${myApp.qtyWireless}`;
	qtyMundo.innerText = `${myApp.qtyMundo}`;
	qtyMundoTotal.innerText = `${myApp.qtyMundoTotal}`;
}

function addGig() {
	myApp.addInternetGig();
	reload();
}

function removeGig() {
	myApp.removeGig();
	reload();
}
function add100() {
	myApp.addInternet100();
	reload();
}

function remove100() {
	myApp.remove100();
	reload();
}

function add200() {
	myApp.addInternet200();
	reload();
}

function remove200() {
	myApp.remove200();
	reload();
}

function add400() {
	myApp.addInternet400();
	reload();
}

function remove400() {
	myApp.remove400();
	reload();
}

function add200() {
	myApp.addInternet200();
	reload();
}

function remove200() {
	myApp.remove200();
	reload();
}

function addTestDrive() {
	myApp.addTestDrive();
	reload();
}

function removeTestDrive() {
	myApp.removeTestDrive();
	reload();
}

function addYourTV() {
	myApp.addYourTV();
	reload();
}

function removeYourTV() {
	myApp.removeYourTV();
	reload();
}

function addMoreTV() {
	myApp.addMoreTV();
	reload();
}

function removeMoreTV() {
	myApp.removeMoreTV();
	reload();
}

function addMostTV() {
	myApp.addMostTV();
	reload();
}

function removeMostTV() {
	myApp.removeMostTV();
	reload();
}

function addPhone() {
	myApp.addPhone();
	reload();
}

function removePhone() {
	myApp.removePhone();
	reload();
}

function resetAll() {
	myApp.resetAll();
	reload();
}

function addMundoTV() {
	myApp.addMundo();
	reload();
}

function removeMundo() {
	myApp.removeMundo();
	reload();
}

function addMundoTotal() {
	myApp.addMundoTotal();
	reload();
}

function removeMundoTotal() {
	myApp.removeMundoTotal();
	reload();
}

function addWireless() {
	myApp.addWireless();
	reload();
}

function removeWireless() {
	myApp.removeWireless();
	reload();
}

function addProtect() {
	myApp.addProtect();
	reload();
}

function removeProtect() {
	myApp.removeProtect();
	reload();
}

// @ts-ignore
$(document).ready(function() {
	// @ts-ignore
	$(".showBase").hide();
	// jQuery methods go here...
	// const input = document.querySelector( '.hidden' );
	// @ts-ignore
	$("#btn").click(() => {
		// @ts-ignore
		$(".hidden").removeClass("hidden");
		// @ts-ignore
		$("#btn").text("OK");
		// @ts-ignore
		$("#btn").css({ width: "200px" });
		// @ts-ignore
		$("#btn").addClass("ok");
		// @ts-ignore
		$(".ok").click(() => {
			// @ts-ignore
			let salary = $("#salary").val();

			if (salary != "") {
				myApp.showBase = true;
				if (myApp.showBase) {
					// @ts-ignore
					$(".showBase").show();
				}
				// myApp.amount += parseInt(salary.toString());
				myApp.baseSalary = parseInt(salary.toString());
				reload();
				// @ts-ignore
				$(".input-field").addClass("hidden");
				// @ts-ignore
				$(".ok").hide("slow");

				//reload();
				console.log(myApp.amount);
			}
		});
	});

	// @ts-ignore
	$("#salary").on("keyup", () => {
		console.log("5");
	});
});
