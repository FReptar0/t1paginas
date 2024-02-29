import React, { useEffect, useRef } from 'react';
import LineChartModelProps from '../utils/types';
import { Line } from 'react-chartjs-2';
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineComponent: React.FC<LineChartModelProps> = (props) => {
    return (
        <>
            <Line 
                data={props.data} 
                options={props.options} 
            />
        </>
    )
}

export default LineComponent;
