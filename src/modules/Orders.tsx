import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Typography } from '@mui/material';
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
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: '20px',
                    borderTop: '1px solid #cecece'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#AD7CFA', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >25%</Typography>
                        <Typography>En preparación</Typography>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#01C671', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography>Enviado</Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#FFC956', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography>Reembolso</Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#FF6700', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >25%</Typography>
                        <Typography>Listo para empaquetar</Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#2180FF', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography>Entregado</Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <div style={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: '#D93A26', marginRight: '5px' }}></div>
                        <Typography
                            sx={{
                                marginRight: '5px',
                                marginLeft: '5px',
                                fontWeight: 'bold'
                            }}
                        >12.5%</Typography>
                        <Typography>Cancelado</Typography>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Orders;