<script>
		const balans = document.querySelector("#account");
		const uitkomst = document.querySelector("#uitkomst");
		const cashRisk = document.querySelector("#cashRisico");
		const slider = document.querySelector("#risico");
		uitkomst.textContent = uitkomst.value = slider.value;
		cashRisico.textContent = cashRisico.value = balans.value;
		let riskValue = cashRisico.value
		let sliderValue = slider.value
		slider.oninput = e => {
		  sliderValue = uitkomst.value = uitkomst.textContent = e.target.value
		  updateCashRisk()
		};
		balans.oninput = e => {
		  riskValue = cashRisico.value = cashRisico.textContent = e.target.value
		  updateCashRisk()
		};

		function updateCashRisk() {
		  cashRisico.textContent = cashRisico.value = balans.value * (sliderValue / 100)
		};
	  



const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const winst = document.querySelector("#winst");
const coins = document.querySelector("#coins");
const reward = document.querySelector("#reward");
const potentieel = document.querySelector("#potentieel");
coins.textContent = start.value = coins.value;
reward.textContent = stop.value = reward.value;
potentieel.textContent = winst.value = potentieel.value;
let startValue = start.value;
let stopValue = stop.value;
let winstValue = winst.value;

start.oninput = e => {
 startValue = start.value = coins.textContent = e.target.value
  updateCoin()
};
stop.oninput = e => {
  stopValue = stop.value = reward.textContent = e.target.value
  updateCoin()
};
winst.oninput = e => {
  winstValue = winst.value = potentieel.textContent = e.target.value
  updateRisk()
};

let coinsVal = 0
let riskVal = 0

function updateCoin() {
  coins.textContent = coinsVal = cashRisk.value / (startValue - stop.value)
  updatePotentieel()
  
};

function updateRisk() {
  reward.textContent = riskVal = (winstValue - startValue) / (startValue - stop.value)
  updatePotentieel()
};

function updatePotentieel(){
  potentieel.textContent = (winstValue - startValue) * coinsVal
};



</script>