function calculateMortgage() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const annualRate = parseFloat(document.getElementById('interestRate').value);
  const years = parseFloat(document.getElementById('loanTerm').value);

  const resultBox = document.getElementById('calcResult');

  if (!principal || !annualRate || !years || principal <= 0 || annualRate <= 0 || years <= 0) {
    resultBox.style.display = 'block';
    resultBox.innerHTML = 'Please enter valid positive numbers for all fields.';
    return;
  }

  const monthlyRate = annualRate / 100 / 12;
  const numPayments = years * 12;
  const monthlyPayment =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
    (Math.pow(1 + monthlyRate, numPayments) - 1);

  const totalPaid = monthlyPayment * numPayments;
  const totalInterest = totalPaid - principal;

  resultBox.style.display = 'block';
  resultBox.innerHTML = `
    <strong>Estimated Monthly Payment:</strong> $${monthlyPayment.toFixed(2)}<br>
    <strong>Total Paid Over ${years} Years:</strong> $${totalPaid.toFixed(2)}<br>
    <strong>Total Interest Paid:</strong> $${totalInterest.toFixed(2)}
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('calcBtn');
  if (btn) btn.addEventListener('click', calculateMortgage);
});
