import React, { useEffect, useRef } from 'react';
import LineChartModelProps from '../utils/LineChartModel';
import { LineChart  } from '@mui/x-charts/LineChart';


const LineComponent: React.FC<LineChartModelProps> = (props) => {
    return (
        <>
            <LineChart
                xAxis={[
                    {
                        scaleType: 'band',
                        dataKey: props.xAxis.dataKey,
                        data: props.xAxis.data
                    }
                ]}
                series={[...props.series]}
                width={props.width}
                height={props.height}
            />
        </>
    )
}

export default LineComponent;
