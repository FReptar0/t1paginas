interface LineChartModelProps {
    options: {
        responsive: boolean;
        plugins: {
            legend: {
                display: boolean;
            };
            labels: {
                display: boolean;
            };
            title: {
                display: boolean;
            };
        };
        tension: number;
        labels: {
            font: {
                size: number;
            };
        };
    }

    data: {
        labels: string[];
        datasets: {
            data: number[];
            borderColor: string;
            backgroundColor: string;
        }[];
    };
}

export default LineChartModelProps;
