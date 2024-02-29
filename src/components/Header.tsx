import { AppBar, Toolbar, TextField, IconButton, Avatar, Menu, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Header = () => {
    const storeNames = [
        { name: 'American Eagle', avatar: 'AE' },
        { name: 'Zara', avatar: 'Z' },
        { name: 'Adidas', avatar: 'A' },
        { name: 'Nike', avatar: 'N' },
    ];

    const [store, setStore] = React.useState<string>(storeNames[0].name);
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof store>) => {
        setStore(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    React.useEffect(() => {
        // Update the URL parameter with the selected store value
        const url = new URL(window.location.href);
        url.searchParams.set('store', store);
        window.history.replaceState({}, '', url.toString());
    }, [store]);

    return (
        <AppBar position="static">
            <Toolbar
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    color: 'black',
                    boxShadow: 'none',
                    height: '80px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginLeft:'70px' }}>
                    <FormControl>
                        <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            value={store}
                            onChange={handleChange}
                            sx={{
                                minWidth: '200px',
                                height: '55px',
                                marginRight: '16px',
                                width: '230px',
                            }}
                        >
                            {storeNames.map((store) => (
                                <MenuItem
                                    value={store.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Avatar sx={{ bgcolor: "#D93A26", marginRight: '8px' }}>{store.avatar}</Avatar>
                                        {store.name}
                                    </div>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <TextField
                        id="outlined-basic"
                        placeholder="Buscar..."
                        variant="outlined"
                        sx={{
                            borderTopRightRadius: '0',
                            borderBottomRightRadius: '0',
                            width: '400px',
                        }}
                    />
                    <IconButton aria-label="search"
                        sx={{
                            bgcolor: "#FADEDE",
                            borderRadius: '0',
                            height: '55px',
                            width: '55px',
                            borderTopRightRadius: '3px',
                            borderBottomRightRadius: '3px',
                            ":hover": {
                                bgcolor: "#F7D2D2",
                            },
                        }}>
                        <SearchOutlinedIcon sx={{ color: "#E67B6F" }} />
                    </IconButton>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        sx={{
                            color: 'black',
                            marginRight: '8px',
                        }}
                    >
                        <HelpOutlineOutlinedIcon />
                    </IconButton>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1" component="div" sx={{ marginRight: '12px' }}>
                            Fernando Rodriguez
                        </Typography>
                        <IconButton>
                            <Avatar sx={{ bgcolor: "#D93A26" }}>F</Avatar>
                        </IconButton>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Header;