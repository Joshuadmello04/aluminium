import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import dataset from '../assets/dataset.json'; // Adjust the path to your actual data file
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Linechart = () => {
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
                        fill: false,
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
                            label: function(tooltipItem) {
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
                        },
                    },
                    y: {
                        title: {
                            display: true,
                            text: selectedOutput,
                        },
                        beginAtZero: true,
                    },
                },
            };

            return (
                <div className="mt-3 h-[59vh] w-[60vw] mx-auto">
                    <Line data={chartData} options={options} />
                </div>
            );
        }
        return <p className="text-white">Please select both input and output parameters to generate the chart.</p>;
    };

    return (
        <div className="p-6 w-max sm:w-1/2 h-3/5 mx-auto flex flex-col items-center text-white">
            <h2 className="text-4xl font-bold mb-4">Select Parameters to Visualize</h2>
            <div className="py-3 flex space-x-4">
                <div className="flex-1">
                    <label htmlFor="input-select" className="block text-lg font-semibold mb-2">Select Input Parameter:</label>
                    <select
                        id="input-select"
                        onChange={handleInputChange}
                        value={selectedInput}
                        className="text-white bg-gray-800 border border-gray-600 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    >
                        <option value="">--Select Input--</option>
                        {inputOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="output-select" className="block text-lg font-semibold mb-2">Select Output Parameter:</label>
                    <select
                        id="output-select"
                        onChange={handleOutputChange}
                        value={selectedOutput}
                        className="bg-gray-800 text-white border border-gray-600 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    >
                        <option value="">--Select Output--</option>
                        {outputOptions.map((option, index) => (
                            <option key={index} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>


            <div className="mt-4 w-full ">
                {renderChart()}
            </div>
        </div>
    );
};

export default Linechart;
