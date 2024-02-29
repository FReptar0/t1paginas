import * as React from 'react';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Header from '../components/Header';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const menuItems = [
    { name: 'Home', route: '/', icon: <HomeOutlinedIcon /> },
    { name: 'Mis pedidos', route: '/orders', icon: <ArticleOutlinedIcon /> },
    { name: 'Clientes', route: '/users', icon: <PersonOutlineOutlinedIcon /> },
    { name: 'Reportes', route: '/charts', icon: <LeaderboardOutlinedIcon /> },
    { name: 'Configuración', route: '/settings', icon: <SettingsOutlinedIcon /> },
];

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Menu: React.FC<{}> = () => {
    const router = useRouter();
    const [open, setOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <AppBar position="fixed" open={open} sx={{
                marginLeft: open ? '0%' : '100%',
            }}>
                <Header />
            </AppBar>
            <Drawer variant="permanent" open={open} sx={{ zIndex: '99999' }}>
                <DrawerHeader
                    sx={{
                        height: '80px',
                    }}
                >
                    {open ? (
                        <div style={{ padding: '10px 0' }}>
                            <img src="/logo.svg" alt="Logo" style={{ width: '80%', height: 'auto', margin: '0 auto', display: 'block' }} />
                        </div>
                    ) : (
                        <div style={{ padding: '10px 0' }}>
                            <img src="/logo_meta.png" alt="Logo" style={{ width: '80%', height: 'auto', margin: '0 auto', display: 'block' }} />
                        </div>
                    )}
                </DrawerHeader>
                <Divider />
                <List>
                    {menuItems.map((item) => (
                        <Link href={'#'} key={item.name}
                            style={{
                                textDecoration: 'none',
                                color: router.pathname === item.route ? '#D93A26' : '#000'
                            }}
                        >
                            <ListItem
                                sx={{
                                    borderRadius: '10px 0 0 10px',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        color: router.pathname === item.route ? '#D93A26' : '#000',
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={open ? item.name : ''} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <div style={{
                position: 'absolute',
                top: '50%',
                left: open ? 210 : 35,
                transform: 'translateY(-50%)',
                backgroundColor: '#f5f5f5',
                padding: '5px',
                borderRadius: '50%',
                zIndex: 99999,
                transition: 'all 0.3s',
                border: '1px solid #ddd',
            }}>
                <IconButton onClick={handleDrawerToggle}>
                    {open ? <KeyboardDoubleArrowLeftOutlinedIcon /> : <KeyboardDoubleArrowRightOutlinedIcon />}
                </IconButton>
            </div>
        </>
    )
}

export default Menu;