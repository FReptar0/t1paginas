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
import { Container, Typography } from '@mui/material';

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
            position: 'top' as const,
        },
        title: {
            display: false,
        },
    },
    tension: 0.3,
};

const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Ventas en linea',
            data: [500, 600, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000],
            borderColor: 'rgb(217, 58, 38)',
            backgroundColor: 'rgba(217, 58, 38, 0.5)',
        },
        {
            label: 'Ventas en punto de venta',
            data: [480, 400, 1000, 1100, 600, 600, 1000, 2100, 800, 500, 800, 1000],
            borderColor: 'rgb(254, 193, 193)',
            backgroundColor: 'rgba(254, 193, 193, 0.5)',
        },
    ],
};
const Sales: React.FC = () => {

    const xAxis = {
        dataKey: 'month',
        label: 'Mes',
        data: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    }

    const series = [
        { data: [550, 600, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000], color: '#D93A26' },
        { data: [480, 400, 1000, 1100, 600, 600, 1000, 2100, 800, 500, 800, 1000], color: '#FEC1C1' },
    ]

    const width = 1500;
    const height = 300;

    return (
        <div>
            <Typography variant="h6">
                Ventas
            </Typography>

            {/*<LineComponent xAxis={xAxis} series={series} width={width} height={height} />*/}

            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Line
                    options={options}
                    data={data}
                />
            </Container>
        </div>
    );
};

export default Sales;
