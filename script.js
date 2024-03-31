
function Calculate() {
  const hourlyWage = document.getElementById("HourlyWage").value;
  const hoursOfWork = document.getElementById("HoursOfWork").value;
  const weeksOfWorkAYear = document.getElementById("WeeksOfWorkAYear").value;
  let income = (hourlyWage * hoursOfWork * weeksOfWorkAYear);
  let totalMoneyMade = income + 0;
  totalMoneyMade += document.getElementById("Bonus").value * 1 + document.getElementById("AdditionalSourcesOfIncome").value * 1;
  let outputString = "You will earn $";
  outputString += Math.round(totalMoneyMade * 100) / 100;
  document.getElementById("IncomeOutputText").textContent = "Your gross income will be $" + Math.round(totalMoneyMade * 100) / 100 + ".";

  outputString += " per year before all expenses."
  totalMoneyMade -= document.getElementById("Rent").value * 12;
  totalMoneyMade -= document.getElementById("HouseInsurance").value * 12;
  totalMoneyMade -= document.getElementById("HouseGasBill").value * 12;
  totalMoneyMade -= document.getElementById("HouseElectricBill").value * 12;
  totalMoneyMade -= document.getElementById("HouseWaterBill").value * 6;
  totalMoneyMade -= document.getElementById("HouseTrashBill").value * 12;
  totalMoneyMade -= document.getElementById("IncomeTax").value;
  totalMoneyMade -= document.getElementById("StateTax").value;


  totalMoneyMade -= document.getElementById("CarMonthlyPayment").value * 12;
  totalMoneyMade -= document.getElementById("CarMonthlyGasPayment").value * 12;
  totalMoneyMade -= document.getElementById("CarMonthlyInsurancePayment").value * 12;


  totalMoneyMade -= document.getElementById("phoneMonthlyPayment").value * 12;
  totalMoneyMade -= document.getElementById("internetMonthlyPayment").value * 12;


  totalMoneyMade -= document.getElementById("tvMonthlyPayment").value * 12;
  totalMoneyMade -= document.getElementById("otherMonthlySubscriptionsPayment").value * 12;
  totalMoneyMade -= document.getElementById("party/Present").value * 12;


  totalMoneyMade -= document.getElementById("FoodMonthly").value * 12;
  totalMoneyMade -= document.getElementById("gymSpaMonthly").value * 12;
  totalMoneyMade -= document.getElementById("clothingYearly").value;



  totalMoneyMade -= document.getElementById("HealthInsuranceMonthly").value * 12;
  totalMoneyMade -= document.getElementById("DentalInsuranceMonthly").value * 12;
  totalMoneyMade -= document.getElementById("EyeInsuranceMonthly").value * 12;
  totalMoneyMade -= document.getElementById("LifeInsuranceMonthly").value * 12;


  totalMoneyMade -= document.getElementById("ChildCareMonthly").value * 12;
  totalMoneyMade -= document.getElementById("ChildCostMonthly").value * 12;
  totalMoneyMade -= document.getElementById("PetCareMonthly").value * 12;
  totalMoneyMade -= document.getElementById("PetInsuranceMonthly").value * 12;


  totalMoneyMade -= document.getElementById("Tuition").value;
  totalMoneyMade -= document.getElementById("MonthlyStudenLoans").value * 12;


  totalMoneyMade -= document.getElementById("RetirementCollegeSavings").value;
  totalMoneyMade -= document.getElementById("CreditCardDebt").value * 12;
  totalMoneyMade -= document.getElementById("EmergencyFunds").value;
  totalMoneyMade -= document.getElementById("LargePurchases").value;

  outputString += " Your expenses total to $" + Math.abs(Math.round((totalMoneyMade - income) * 100) / 100) + ".";

  if (totalMoneyMade >= 0) {
    outputString += "\nAfter all of your expenses you will have $";
    outputString += Math.round(totalMoneyMade * 100) / 100;
    outputString += "!";
  } else {
    outputString += "\rAfter all of your expenses you will be $";
    outputString += Math.round(totalMoneyMade * 100) / 100 * -1;
    outputString += " in DEBT.";
  }

  document.getElementById("outputText").textContent = outputString;

}

function CalculateTaxes() {
  const hourlyWage = document.getElementById("HourlyWage").value;
  const hoursOfWork = document.getElementById("HoursOfWork").value;
  const weeksOfWorkAYear = document.getElementById("WeeksOfWorkAYear").value;
  let totalMoneyMade = (hourlyWage * hoursOfWork * weeksOfWorkAYear);
  totalMoneyMade += document.getElementById("Bonus").value * 1 + document.getElementById("AdditionalSourcesOfIncome").value * 1;
  const taxBrackets = [
    [9875, 0.1],
    [40125, 0.12],
    [85525, 0.22],
    [163300, 0.24],
    [207350, 0.32],
    [518400, 0.35],
    [Infinity, 0.37]
  ];
  const taxBrackets2 = [
    [19750, 0.1],
    [80250, 0.12],
    [171050, 0.22],
    [326600, 0.24],
    [414700, 0.32],
    [622050, 0.35],
    [Infinity, 0.37]
  ];
  let clampValue = document.getElementById("PeopleOnIncome").value * 1;
  clampValue = Math.min(clampValue, 2);
  clampValue = Math.max(clampValue, 1);

  document.getElementById("PeopleOnIncome").value = clampValue;

  if (document.getElementById("PeopleOnIncome").value * 1 >= 2) {
    for (let i = 0; i < taxBrackets.length; i++) {
      for (let c = 0; c < taxBrackets[i].length; c++) {
        taxBrackets[i][c] = taxBrackets2[i][c] * 1;
      }
    }

  }

  let taxPercentage = 0;

  for (let i = 0; i < taxBrackets.length; i++) {
    if (totalMoneyMade <= taxBrackets[i][0]) {
      taxPercentage = taxBrackets[i][1];
      break;
    }
  }
  let taxesOwed = Math.round(totalMoneyMade * taxPercentage * 100) / 100;
  document.getElementById("IncomeTax").value = taxesOwed;
}
