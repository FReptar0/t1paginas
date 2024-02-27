import React, { useState, useRef, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar: React.FC<{}> = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(true);
    const [selected, setSelected] = useState<string>('/');
    const drawerRef = useRef<HTMLDivElement>(null);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    const handleListItemClick = (event: React.SyntheticEvent, item: string) => {
        setSelected(item);
    };

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as HTMLElement)) {
                setOpen(false);
            }
        });
        return () => document.removeEventListener('mousedown', handleDrawerToggle);
    }, []);

    const menuItems = [
        { name: 'Home', route: '/', icon: <HomeOutlinedIcon /> },
        { name: 'Mis pedidos', route: '/orders', icon: <ArticleOutlinedIcon /> },
        { name: 'Clientes', route: '/users', icon: <PersonOutlineOutlinedIcon /> },
        { name: 'Reportes', route: '/charts', icon: <LeaderboardOutlinedIcon /> },
        { name: 'Configuración', route: '/settings', icon: <SettingsOutlinedIcon /> },
    ];

    return (
        <div>
            <Drawer
                open={open}
                variant="permanent"
                anchor="left"
                PaperProps={{
                    sx: {
                        width: 240,
                        backgroundColor: '#f5f5f5',
                        borderRight: '1px solid #ddd',
                    },
                    ref: drawerRef,
                }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <IconButton onClick={handleDrawerToggle}>
                        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                    <div style={{ padding: '10px 0' }}>
                        <img src="/logo.svg" alt="Logo" style={{ width: '80%', height: 'auto', margin: '0 auto', display: 'block' }} />
                    </div>
                </div>
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
                                <ListItemText primary={item.name} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
        </div>
    );
}

export default Sidebar;