const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Math', 'Science', 'English', 'History'],
        datasets: [{
            label: 'Marks',
            data: [85, 78, 90, 70],

         
            backgroundColor: ['red', 'blue', 'green', 'orange'],

            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});