const calculateSimpleInterest = (principal, rate, time) => {
    return (principal * rate * time) /100;
 }
 
const calculateTotalPayableAmount = (principal, interestAmount) => {
    return principal + interestAmount;
 }

const calculate = () => {
    let p = document.getElementById("principal").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;

    let simpleInterest = calculateSimpleInterest(parseInt(p), parseInt(r), parseInt(t));
    let amount = calculateTotalPayableAmount(parseInt(p), simpleInterest);

    let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${parseInt(p).toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

if (typeof module !== 'undefined') 
module.exports = (calculatedSimpleInterest, calculateTotalPayableAmount, calculate);