document.getElementById('loan-form').addEventListener('submit', function(e){

    document.getElementById('results').style.display = "none";
    document.getElementById('loading').style.display = "block";

    setTimeout(calculate, 1000);

    e.preventDefault();
});

function calculate() {

    const amount = document.getElementById('loan_amount').value;
    const interest = document.getElementById('interest').value;
    const years = document.getElementById('years').value;

    // ✅ Validation
    if (amount === '' || interest === '' || years === '') {
        showAlert("Please fill all fields");
        return;
    }

    const principal = parseFloat(amount);
    const calculatedInterest = parseFloat(interest) / 100 / 12;
    const calculatedPayments = parseFloat(years) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);

    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {

        document.getElementById('monthly_payment').value = monthly.toFixed(2);
        document.getElementById('total_amount').value = (monthly * calculatedPayments).toFixed(2);
        document.getElementById('total_interest').value = (monthly * calculatedPayments - principal).toFixed(2);

        document.getElementById('results').style.display = "block";
        document.getElementById('loading').style.display = "none";

    } else {
        showAlert("Enter valid numbers");
    }
}

function showAlert(message) {

    document.getElementById('loading').style.display = "none";

    const errorDiv = document.createElement('div');
    errorDiv.className = "alert alert-danger";
    errorDiv.appendChild(document.createTextNode(message));

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    card.insertBefore(errorDiv, heading);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}