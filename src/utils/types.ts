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

    height: number;
}

interface DoughnutChartModelProps { 
    data: {
        labels: string[];
        datasets: {
            data: number[];
            backgroundColor: string[];
            borderColor: string;
        }[];
    };

    options:{
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
        labels: {
            font: {
                size: number;
            };
        };
        maintainAspectRatio: boolean;
        spacing: number;
        borderRadius: {
            innerStart: number;
            outerStart: number;
        };
        borderAlign: string;
        cutout: string;
        radius: string;
    };

    height: number;
}

export type {
    LineChartModelProps,
    DoughnutChartModelProps
};
