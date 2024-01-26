function renderChart(statsName, baseStats) {
  const ctx = document.getElementById('myChart').getContext('2d');

   // Set global font options
   Chart.defaults.font.family = 'Noto Sans, sans-serif';
   Chart.defaults.font.weight = 'bold'; // Set font weight to bold

  const config = {
    type: 'bar', // Use 'bar' for both vertical and horizontal bar charts
    data: {
      labels: statsName,
      datasets: [{
        label: '',
        data: baseStats,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      indexAxis: 'y', // Set the index axis to 'y' for horizontal bar chart
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true
        },
        y: {
          ticks: {
            display: true
          }
        }
      }
    },
  };

  new Chart(ctx, config);
}
