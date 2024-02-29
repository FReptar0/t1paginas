import React from 'react';
import { Avatar, Box, IconButton, Typography, styled } from '@mui/material';
import Menu from '../modules/Menu';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';
import DataVizualizeContainer from '../modules/DataVizualizeContainer';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const Index: React.FC = () => {

    const [store, setStore] = React.useState<string>('');
    const router = useRouter();

    React.useEffect(() => {
        const url = new URL(window.location.href);
        const store = url.searchParams.get('store') ?? 'Sin tienda seleccionada';
        setStore(store);
    }, []);

    return (
        <>
            <title>T1Paginas</title>
            <Box sx={{ display: 'flex' }}>
                <Menu />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />

                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
                        <Avatar
                            sx={{ marginRight: '20px' }}
                        />
                        <Typography variant="h6" component="div"
                            sx={{ marginRight: '20px' }}
                        >
                            {store}
                        </Typography>
                        <IconButton sx={{ border: '1px solid #cecece', borderRadius: '4px', marginRight: '20px' }}>
                            <OpenInNewOutlinedIcon />
                        </IconButton>
                        <Link href="#" style={{ textDecoration: 'none', color: '#D93A26', marginRight: '20px' }}>
                            Visitar mi tienda
                        </Link>
                    </Box>

                    <DataVizualizeContainer />
                    
                </Box>
            </Box>
        </>
    );
};

export default Index;
