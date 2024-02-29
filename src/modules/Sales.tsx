import React from 'react';
import Typography from '@mui/material/Typography';
import LineChartModelProps from '../utils/LineChartModel';
import { LineChart } from '@mui/x-charts';
import LineComponent from '../components/Line';


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
            {/* <LineChart
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: 'month',
                        label: 'Mes',
                        data: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
                    }
                ]}
                series={[
                    { data: [550, 600, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000], label: 'Ventas tienda en línea', color: '#D93A26' },
                    { data: [480, 400, 1000, 1100, 600, 600, 1000, 2100, 800, 500, 800, 1000], label: 'Ventas punto de venta', color: '#FEC1C1' },
                ]}
                width={1500}
                height={300}
            /> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <LineComponent
                xAxis={xAxis}
                series={series}
                width={width}
                height={height}
            />
            </div>
        </div>
    );
};

export default Sales;
