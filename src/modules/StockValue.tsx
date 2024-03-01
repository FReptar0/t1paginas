import { Typography, Box, LinearProgress } from "@mui/material";

const StockValue: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography
                    variant="h4"
                    sx={{
                        marginRight: '10px',
                    }}
                >
                    $40,000.00
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: '#49BD8E',
                        fontWeight: '550',
                    }}
                >
                    +34.64%
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                <Typography
                    sx={{
                        marginRight: '10px',
                        color: '#7B7B7B',
                    }}
                >
                    Piezas
                </Typography>
                <Typography>
                    10,000
                </Typography>
            </Box>
            <Box 
                sx={{
                    marginTop: '20px',
                }}
            >
                <Typography
                    sx={{
                        marginBottom: '-10px',
                    }}
                >
                    Pantalón de mezclilla Flare
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <LinearProgress
                        variant="determinate"
                        value={90}
                        color="error"
                        sx={{
                            height: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#E0E0E0',
                            marginTop: '10px',
                            width: '100%',
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#7B7B7B',
                            marginTop: '10px',
                            marginLeft: '10px',
                        }}
                    >
                        $52,234.00
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography>M Negro</Typography>
                    <Typography
                        sx={{
                            marginLeft: '10px',
                            color: '#7B7B7B'
                        }}
                    >
                        540 Piezas
                        </Typography>
                </Box>
            </Box>
            <Box 
                sx={{
                    marginTop: '20px',
                }}
            >
                <Typography
                    sx={{
                        marginBottom: '-10px',
                    }}
                >
                    Pantalón de mezclilla Flare
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <LinearProgress
                        variant="determinate"
                        value={90}
                        color="error"
                        sx={{
                            height: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#E0E0E0',
                            marginTop: '10px',
                            width: '100%',
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#7B7B7B',
                            marginTop: '10px',
                            marginLeft: '10px',
                        }}
                    >
                        $52,234.00
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography>M Negro</Typography>
                    <Typography
                        sx={{
                            marginLeft: '10px',
                            color: '#7B7B7B'
                        }}
                    >
                        540 Piezas
                        </Typography>
                </Box>
            </Box>
            <Box 
                sx={{
                    marginTop: '20px',
                }}
            >
                <Typography
                    sx={{
                        marginBottom: '-10px',
                    }}
                >
                    Pantalón de mezclilla Flare
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <LinearProgress
                        variant="determinate"
                        value={90}
                        color="error"
                        sx={{
                            height: '10px',
                            borderRadius: '5px',
                            backgroundColor: '#E0E0E0',
                            marginTop: '10px',
                            width: '100%',
                        }}
                    />
                    <Typography
                        sx={{
                            color: '#7B7B7B',
                            marginTop: '10px',
                            marginLeft: '10px',
                        }}
                    >
                        $52,234.00
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Typography>M Negro</Typography>
                    <Typography
                        sx={{
                            marginLeft: '10px',
                            color: '#7B7B7B'
                        }}
                    >
                        540 Piezas
                        </Typography>
                </Box>
            </Box>

        </>
    );
}

export default StockValue;