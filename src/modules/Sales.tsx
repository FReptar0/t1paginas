import React from 'react';
import { Badge, Typography, Box } from '@mui/material';
import LineComponent from '../components/Line';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


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

    const badgeContent = (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                <ArrowUpwardIcon
                    fontSize="small"
                    style={{ color: '#008A50' }}
                />
                <Typography
                    style={{ color: '#008A50' }}
                >
                    22.505
                </Typography>
            </div>
        </>
    );


    return (
        <div>
            <Typography variant="h6">
                Ventas
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 1, mt: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '30px' }}>
                        $ 420,000.00
                    </Typography>
                    <Badge
                        badgeContent={badgeContent}
                        color="success"
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: '#9FDBC2',
                                color: '#fff',
                                borderRadius: '5px',
                                mr: -6,
                            },
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mr: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: 'rgb(217, 58, 38)', mr: 1 }} />
                            <Typography sx={{ color: '#7B7B7B' }}>
                                Ventas tienda en línea
                            </Typography>
                        </Box>
                        <Typography>$324,000.00</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mr: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Box sx={{ width: '13px', height: '13px', borderRadius: '50%', backgroundColor: 'rgb(254, 193, 193)', mr: 1 }} />
                            <Typography sx={{ color: '#7B7B7B' }}>
                                Ventas punto de venta
                            </Typography>
                        </Box>
                        <Typography>$148,000.00</Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} />
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 4,
                    width: '90%',
                    margin: '0 auto',
                }}
            >
                <LineComponent data={data} options={options} height={250} />
            </Box>
        </div>
    );
};

export default Sales;
