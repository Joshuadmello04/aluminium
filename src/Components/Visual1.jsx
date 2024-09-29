import { useState } from 'react';
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import dataset from '../assets/dataset.json'; // Adjust the path to your actual data file
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Visual1 = () => {
    const [selectedInput, setSelectedInput] = useState('');
    const [selectedOutput, setSelectedOutput] = useState('');

    const inputOptions = [
        'Casting Temperature (°C)',
        'Cooling Water Temperature (°C)',
        'Casting Speed (m/min)',
        'Cast Bar Entry Temperature (°C)',
        'Emulsion Temperature (°C)',
        'Emulsion Pressure (bars)',
        'Emulsion Concentration (%)',
        'Rod Quench Water Pressure (bars)',
        'Stand Number',
        'Reduction Per Pass (%)',
        'Rolling Speed (m/min)',
        'Al (%)',
        'Si (%)',
        'Mg (%)',
        'Cu (%)',
        'Fe (%)',
        'Mn (%)',
        'Zn (%)',
        'Ti (%)',
        'Cr (%)',
        'Ni (%)',
    ];

    const outputOptions = [
        'UTS (MPa)',
        'Elongation (%)',
        'Conductivity (% IACS)',
    ];

    const handleInputChange = (event) => {
        setSelectedInput(event.target.value);
    };

    const handleOutputChange = (event) => {
        setSelectedOutput(event.target.value);
    };

    const renderChart = () => {
        if (selectedInput && selectedOutput) {
            // Extract relevant data from the dataset
            const xData = dataset.map(item => item[selectedInput]);
            const yData = dataset.map(item => item[selectedOutput]);

            const chartData = {
                labels: xData,
                datasets: [
                    {
                        label: `${selectedOutput} vs ${selectedInput}`,
                        data: yData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                        tension: 0.1, // Smoothens the line
                    },
                ],
            };

            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function (tooltipItem) {
                                return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                            },
                        },
                    },
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: selectedInput,
                            color: 'white',
                            font: {
                                weight: 'bold',
                                size: 14, // Adjust the size as needed
                            },
                        },
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)', // Subtle grid color for better visibility
                        },
                        ticks: {
                            color: 'white', // Color of the tick labels
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: selectedOutput,
                            color: 'white',
                            font: {
                                weight: 'bold',
                                size: 14, // Adjust the size as needed
                            },
                        },
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)', // Subtle grid color for better visibility
                        },
                        ticks: {
                            color: 'white', // Color of the tick labels
                        },
                    },
                },
            };

            return (
                <motion.div
                    className="p-4 mt-6 h-auto max-w-full mx-auto rounded-lg shadow-lg bg-black bg-opacity-60 overflow-x-auto"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="sm:min-w-[400px] md:min-w-[500px] lg:min-w-full">
                        <Line data={chartData} options={options} />
                    </div>
                </motion.div>
            );
        }

        return (
            <p className="my-4 text-lg font-semibold text-center text-white">
                Please select both input and output parameters to generate the chart.
            </p>
        );
    };

    return (
        <motion.div
            className="p-8 w-full max-w-5xl mx-auto flex flex-col items-center rounded-xl shadow-lg backdrop-blur-sm bg-white bg-opacity-10"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-extrabold text-white mb-6">Select Parameters to Visualize</h2>
            <div className="py-4 flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 w-full">
                <div className="flex-1">
                    <label htmlFor="input-select" className="block text-lg font-semibold text-white mb-2">Select Input Parameter:</label>
                    <select
                        id="input-select"
                        onChange={handleInputChange}
                        value={selectedInput}
                        className="text-white bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    >
                        <option value="">--Select Input--</option>
                        {inputOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="output-select" className="block text-lg font-semibold text-white mb-2">Select Output Parameter:</label>
                    <select
                        id="output-select"
                        onChange={handleOutputChange}
                        value={selectedOutput}
                        className="bg-gray-800 text-white border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    >
                        <option value="">--Select Output--</option>
                        {outputOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full">
                {renderChart()}
            </div>
        </motion.div>
    );
};

export default Visual1;
