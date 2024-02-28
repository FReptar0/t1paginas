import React from 'react';
import { Box, styled } from '@mui/material';
import Menu from '../modules/Menu';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Index: React.FC = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Menu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                </Box>
            </Box>
        </>
    );
};

export default Index;
