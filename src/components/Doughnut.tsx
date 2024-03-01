import React from "react";
import { DoughnutChartModelProps } from "../utils/types";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutComponent: React.FC<DoughnutChartModelProps> = (props) => {
    return (
        <><div style={{ position: 'relative', width: '300px', height: '200px', margin: '0 auto' }}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '20px', marginTop: '20px' }}>
                <Doughnut data={props.data} options={props.options} height={props.height} />
            </div>
            <Typography
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    fontSize: '48px',
                }}
            >
                10k
            </Typography>
            <Typography
                style={{ position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#7B7B7B' }}
            >
                Pedidos
            </Typography>
        </div>
        </>
    );
}

export default DoughnutComponent;