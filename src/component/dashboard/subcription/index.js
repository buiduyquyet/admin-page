import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'The number of subscribers in the last 7 days',
        },
    },
};

const labels = ['10/01', '11/01', '12/01', '13/01', '14/01', '15/01', '16/01'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Number subs',
            data: [20, 18, 27, 29, 21, 19, 28],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

export function Subcription() {
    return <Line options={options} data={data} />;
}