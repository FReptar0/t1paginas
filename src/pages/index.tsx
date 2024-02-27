import React from 'react';
import Sidebar from '../components/SideBar';
import Container from '@mui/material/Container';

const Index: React.FC = () => {
    return (
        <>
            {/* El sidebar debe hacer que los demas elementos no puedan estar detras de el, debe ir en un bloque estilo aside */}
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    padding: 0,
                    margin: 0,
                    height: '100vh',
                }}
            >
                <Sidebar />
            </Container>
        </>
    );
};

export default Index;
