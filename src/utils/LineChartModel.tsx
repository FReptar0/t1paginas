interface LineChartModelProps {
    series: {
        data: number[];
        color: string;
    }[];
    xAxis: {
        dataKey: string;
        label: string;
        data: string[];
    };
    width: number;
    height: number;
}

export default LineChartModelProps;
