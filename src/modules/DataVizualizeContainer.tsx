import React from 'react';
import { Box, Card } from '@mui/material';
import Sales from './Sales';
import ConversionOverTime from './ConversionsOverTime';
import Orders from './Orders';
import StockValue from './StockValue';

const DataVizualizeContainer: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '20px' }}>
                <Card sx={{
                    height: '100%',
                    border: '1px solid #cecece',
                    boxShadow: 'inherit',
                    width: '100%',
                    padding: '20px'
                }}>
                    <Sales />
                </Card>
            </Box>

            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: '20px' }}>
                <Card sx={{
                    height: '300px',
                    border: '1px solid #cecece',
                    boxShadow: 'inherit',
                    width: '100%',
                    padding: '20px'

                }}>
                    <ConversionOverTime />
                </Card>
                <Card sx={{
                    height: '300px',
                    border: '1px solid #cecece',
                    width: '100%',
                    padding: '20px'
                }}>
                    <Orders />
                </Card>
                <Card sx={{
                    height: '300px',
                    border: '1px solid #cecece',
                    width: '100%',
                    padding: '20px'
                }}>
                    <StockValue />
                </Card>
            </Box>
        </>
    )
}

export default DataVizualizeContainer;
