function renderChart() {
    const ctx = document.getElementById('myChart');
  
    new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: statsName,
        datasets: [
          {
            label: 'Base Stats',
            data: baseStats,
            borderWidth: 1,
            
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            pointLabels: {
              display: true,
              font: {
                size: 20, // Change the font size to your desired size
                style: 'normal', // Change the font style (e.g., 'italic', 'normal', 'bold', etc.)
                family: ' noto-sans, sans-serif', // Change the font family (e.g., 'Arial', 'Verdana', 'Times New Roman', etc.)
                weight: 'bold', // Change the font weight (e.g., 'bold', 'normal', etc.)
                
              },
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Base Stats',
          },
        },
      },
    });
  }
  