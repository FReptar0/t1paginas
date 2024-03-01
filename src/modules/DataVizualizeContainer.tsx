import React from 'react';
import { Box, Card, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Sales from './Sales';
import ConversionOverTime from './ConversionsOverTime';
import Orders from './Orders';
import StockValue from './StockValue';

const DataVizualizeContainer: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
                <Card sx={{
                    border: '1px solid #cecece',
                    boxShadow: 'inherit',
                    padding: '20px',
                    borderRadius: '10px',
                    width: '100%',
                }}>
                    <Sales />
                </Card>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
                <Card sx={{
                    border: '1px solid #cecece',
                    borderRadius: '10px',
                    width: '100%',
                    padding: '20px'

                }}>
                    <CardHeader
                        action={
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                        }
                        title="Conversiones a lo largo del tiempo"
                        sx={{
                            padding: '0px',
                        }}
                    />
                    <ConversionOverTime />
                </Card>

                <Card sx={{
                    height: '300px',
                    border: '1px solid #cecece',
                    borderRadius: '10px',
                    width: '100%',
                    padding: '20px'
                }}>
                    <CardHeader
                        action={
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                        }
                        title="Ordenes"
                        sx={{
                            padding: '0px',
                        }}
                    />
                    <CardContent>
                        <Orders />
                    </CardContent>
                </Card>

                <Card sx={{
                    height: '300px',
                    border: '1px solid #cecece',
                    borderRadius: '10px',
                    width: '100%',
                    padding: '20px'
                }}>
                    <CardHeader
                        action={
                            <IconButton>
                                <ChevronRightIcon />
                            </IconButton>
                        }
                        title="Valor del inventario"
                        sx={{
                            padding: '0px',
                        }}
                    />
                    <CardContent>
                        <StockValue />
                    </CardContent>
                </Card>
            </Box>
        </>
    )
}

export default DataVizualizeContainer;
