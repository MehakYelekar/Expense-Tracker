// This file is responsible for generating graphs and charts to visualize the expense data using a charting library.

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('expenseChart').getContext('2d');
    const expenseData = {
        labels: ['Food', 'Transport', 'Utilities', 'Entertainment', 'Others'],
        datasets: [{
            label: 'Monthly Expenses',
            data: [300, 150, 100, 200, 50],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    };

    const expenseChart = new Chart(ctx, {
        type: 'bar',
        data: expenseData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});