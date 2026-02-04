// Main JavaScript file for the Expense Tracker website
document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalDisplay = document.getElementById('total-expense');
    let expenses = [];

    // Function to update the total expense display
    function updateTotal() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalDisplay.textContent = `Total Expense: ₹${total.toFixed(2)}`;
    }

    // Function to render the expense list
    function renderExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.textContent = `${expense.description}: ₹${expense.amount.toFixed(2)}`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                expenses.splice(index, 1);
                renderExpenses();
                updateTotal();
            };
            li.appendChild(deleteButton);
            expenseList.appendChild(li);
        });
    }

    // Event listener for form submission
    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const description = event.target.elements['description'].value;
        const amount = parseFloat(event.target.elements['amount'].value);
        if (description && !isNaN(amount)) {
            expenses.push({ description, amount });
            renderExpenses();
            updateTotal();
            expenseForm.reset();
        }
    });
});