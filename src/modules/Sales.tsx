import React from 'react';
import { Container, Typography } from '@mui/material';
import LineComponent from '../components/Line';


const Sales: React.FC = () => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            labels: {
                display: false,
            },
            title: {
                display: false,
            },
        },
        tension: 0.2,
        labels: {
            font: {
                size: 14,
            },
        },
        maintainAspectRatio: false,
    };

    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    const data = {
        labels,
        datasets: [
            {
                data: [600, 690, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000],
                borderColor: 'rgb(217, 58, 38)',
                backgroundColor: 'rgba(217, 58, 38, 0.5)',
            },
            {
                data: [500, 450, 1000, 1100, 600, 600, 1000, 2100, 800, 500, 800, 1000],
                borderColor: 'rgb(254, 193, 193)',
                backgroundColor: 'rgba(254, 193, 193, 0.5)',
            },
        ],
    };


    return (
        <div>
            <Typography variant="h6">
                Ventas
            </Typography>



            <div>
                <LineComponent data={{
                    labels,
                    datasets: [
                        {
                            data: [600, 690, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000],
                            borderColor: 'rgb(217, 58, 38)',
                            backgroundColor: 'rgba(217, 58, 38, 0.5)',
                        },
                        {
                            data: [500, 450, 1000, 1100, 600, 600, 1000, 2100, 800, 500, 800, 1000],
                            borderColor: 'rgb(254, 193, 193)',
                            backgroundColor: 'rgba(254, 193, 193, 0.5)',
                        },
                    ],
                }} options={options} />
            </div>
        </div>
    );
};

export default Sales;
