import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { UserData } from '../assets/Data.js'; // Adjust the import path if necessary

// Register the components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Visuals = () => {
  // Prepare data for the bar chart
  const data = {
    labels: UserData.map((item) => item.year), // X-axis labels (years)
    datasets: [
      {
        label: 'User Gain',
        data: UserData.map((item) => item.userGain), // Data for user gain
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal color
        borderColor: 'rgba(75, 192, 192, 1)', // Teal border color
        borderWidth: 1,
      },
      {
        label: 'User Lost',
        data: UserData.map((item) => item.userLost), // Data for user lost
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red color
        borderColor: 'rgba(255, 99, 132, 1)', // Red border color
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value.toLocaleString(); // Format y-axis labels with commas
          },
        },
      },
    },
  };

  return (
    <div className="p-6 m-6 rounded-lg shadow-md flex justify-center items-center">
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-4">User Statistics</h2>
      <Bar data={data} options={options} />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-2xl font-bold text-gray-900 text-center dark:text-white mb-4">User Statistics</h2>
      <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Visuals;
