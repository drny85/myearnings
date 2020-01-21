class CalculateComp {
	constructor(
		internet = 0,
		tv = 0,
		phone = 10,
		tier = 1,
		amount = 0,
		qtyPhone = 0,
		qtyTestDrive = 0,
		qtyYourTV = 0,
		qtyMostTV = 0,
		qtyMoreTV = 0,
		qtyMundo = 0,
		qtyMundoTotal = 0,
		internet200 = 20,
		internet400 = 0,
		internetGig = 0,
		yourFiosTV = 0,
		qty200 = 0,
		qty400 = 0,
		qtyGig = 0,
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
		this.tier = tier;
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
		this.qty200 = qty200;
		this.qty400 = qty400;
		this.qtyGig = qtyGig;
		this.qtyPhone = qtyPhone;
		this.qtyMundo = qtyMundo;
		this.qtyMundoTotal = qtyMundoTotal;
		this.qtyTestDrive = qtyTestDrive;
		this.qtyYourTV = qtyYourTV;
		this.qtyMostTV = qtyMostTV;
		this.qtyMoreTV = qtyMoreTV;
		console.log("INIT");
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
		amt = internet + phone + tv;

		return amt;
	}
	get internetAmount() {
		return (
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
		this.qty200 = 0;
		this.qty400 = 0;
		this.qtyGig = 0;
		this.qtyPhone = 0;
		this.qtyMundo = 0;
		this.qtyMundoTotal = 0;
		this.qtyTestDrive = 0;
		this.qtyYourTV = 0;
		this.qtyMostTV = 0;
		this.qtyMoreTV = 0;
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
const qty200 = document.getElementById("qty200");
const qty400 = document.getElementById("qty400");
const qtyTestDtive = document.getElementById("qtyTestDrive");
const qtyYourTV = document.getElementById("qtyYourTV");
const qtyMoreTV = document.getElementById("qtyMoreTV");
const qtyMostTV = document.getElementById("qtyMostTV");
const qtyPhone = document.getElementById("qtyPhone");
const qtyMundo = document.getElementById("qtyMundo");
const qtyMundoTotal = document.getElementById("qtyMundoTotal");

const spanInt = document.getElementById("spanInt");
const spanTV = document.getElementById("spanTV");
const spanPhone = document.getElementById("spanPhone");
const mainCard = document.getElementById("mainCard");
const spanTier = document.getElementById("tier1");
const parag = document.getElementById("parag");

const myApp = new CalculateComp();

function resetAll() {
	myApp.resetAll();
	const base = document.getElementById("base");
	console.log(base);
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
		parag.style.display = "block";
		spanTier.innerText = "2";
	} else if (myApp.tier === 1) {
		mainCard.style.backgroundColor = "#ecf0f1";
		parag.style.display = "none";
	} else if (myApp.tier === 3) {
		mainCard.style.backgroundColor = "#1abc9c";
		spanTier.innerText = "3";
	} else {
		parag.style.display = "none";
	}
	earnings.textContent = `$${myApp.amount.toFixed(2)}`;
	gigQty.innerText = `${myApp.qtyGig}`;
	qty200.innerText = `${myApp.qty200}`;
	qty400.innerText = `${myApp.qty400}`;
	qtyTestDtive.innerText = `${myApp.qtyTestDrive}`;
	qtyYourTV.innerText = `${myApp.qtyYourTV}`;
	qtyMoreTV.innerText = `${myApp.qtyMoreTV}`;
	qtyMostTV.innerText = `${myApp.qtyMostTV}`;
	spanInt.innerText = `${myApp.internet}`;
	spanTV.innerText = `${myApp.tv}`;
	spanPhone.innerText = `${myApp.qtyPhone}`;
	qtyPhone.innerText = `${myApp.qtyPhone}`;
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

$(document).ready(function() {
	$(".showBase").hide();
	// jQuery methods go here...
	// const input = document.querySelector( '.hidden' );
	$("#btn").click(() => {
		$(".hidden").removeClass("hidden");
		$("#btn").text("OK");
		$("#btn").css({ width: "200px" });
		$("#btn").addClass("ok");
		$(".ok").click(() => {
			let salary = $("#salary").val();

			if (salary != "") {
				myApp.showBase = true;
				if (myApp.showBase) {
					$(".showBase").show();
				}
				// myApp.amount += parseInt(salary.toString());
				myApp.baseSalary = parseInt(salary.toString());
				reload();
				$(".input-field").addClass("hidden");
				$(".ok").hide("slow");

				//reload();
				console.log(myApp.amount);
			}
		});
	});

	$("#salary").on("keyup", () => {
		console.log("5");
	});
});
