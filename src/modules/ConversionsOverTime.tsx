import { CardActions, CardContent, CardHeader, Typography } from "@mui/material";
import LineComponent from "../components/Line";

const ConversionOverTime: React.FC = () => {

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

    const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];

    const data = {
        labels,
        datasets: [
            {
                data: [600, 690, 700, 2000, 1200, 800, 1000, 1000, 1500, 1000, 1500, 2000],
                borderColor: 'rgb(217, 58, 38)',
                backgroundColor: 'rgba(217, 58, 38, 0.5)',
            },
        ],
    };


    return (
        <>
            <CardContent
                sx={{
                    padding: '0px',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            variant="h4"
                            sx={{
                                marginRight: '5px',
                            }}
                        >
                            22.80%
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#49BD8E',
                                fontWeight: '550',
                            }}
                        >
                            +34.64%
                        </Typography>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            variant="h6"
                            sx={{
                                marginRight: '5px',
                                color: '#7B7B7B',
                            }}
                        >
                            Sesiones
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                color: '#7B7B7B',
                            }}
                        >
                            1.5k
                        </Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: '30px' }}>
                    <LineComponent data={data} options={options} height={150} />
                </div>

            </CardContent>

            <CardActions
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    padding: '0px',
                    borderTop: '1px solid #cecece'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        sx={{
                            color: '#7B7B7B',
                        }}
                    >
                        Agregar a carrito
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                marginRight: '10px',
                            }}
                        >
                            400
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgb(217, 58, 38)',
                            }}
                        >6.14%</Typography>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Typography
                        sx={{
                            color: '#7B7B7B',
                        }}
                    >
                        Iniciar pago
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Typography
                            sx={{
                                marginRight: '10px',
                            }}
                        >
                            231
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgb(217, 58, 38)',
                            }}
                        >6.14%</Typography>
                    </div>
                </div>
            </CardActions>
        </>
    );
}

export default ConversionOverTime;