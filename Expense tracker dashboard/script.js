let balance = 0;

function addTransaction() {
    const text = document.getElementById("text").value;
    const amount = parseInt(document.getElementById("amount").value);

    if (text === "" || isNaN(amount)) {
        alert("Please enter valid data");
        return;
    }

    const list = document.getElementById("list");

    const li = document.createElement("li");
    li.classList.add(amount > 0 ? "income" : "expense");

    li.innerHTML = `
        ${text} <span>₹${amount}</span>
    `;

    list.appendChild(li);

    balance += amount;
    document.getElementById("balance").innerText = balance;

    document.getElementById("text").value = "";
    document.getElementById("amount").value = "";
}