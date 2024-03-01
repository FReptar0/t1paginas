import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography, Box } from '@mui/material';
import DoughnutComponent from '../components/Doughnut';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Listo para empaquetar', 'En preparación', 'Entregado', 'Reembolso', 'Enviado', 'Cancelado'],
    datasets: [
        {
            data: [2500, 2500, 1250, 1250, 1250, 1250],
            backgroundColor: [
                '#FF6700',
                '#AD7CFA',
                '#2180FF',
                '#FFC956',
                '#01C671',
                '#D93A26',
            ],
            borderColor: 'white'
        },
    ],
};

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
    labels: {
        font: {
            size: 14,
        },
    },
    maintainAspectRatio: false,
    spacing: -6,
    borderRadius: {
        innerStart: 20,
        outerStart: 20,
    },
    borderAlign: 'center',
    cutout: '79%',
    radius: '100%',
};

const Orders: React.FC = () => {
    return (
        <>
            <DoughnutComponent data={data} options={options} height={200} />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    mt: 2,
                    borderTop: '1px solid #cecece'
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#AD7CFA', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >25%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >En preparación</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#01C671', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >Enviado</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#FFC956', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >Reembolso</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', mt: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#FF6700', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >25%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >Listo para empaquetar</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#2180FF', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >Entregado</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#D93A26', mr: 1 }} />
                        <Typography
                            sx={{
                                mr: 1,
                                ml: 1,
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography
                            sx={{
                                color: '#7B7B7B'
                            }}
                        >Cancelado</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Orders;