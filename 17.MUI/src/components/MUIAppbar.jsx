import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';

function MUIAppbar() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar direction="row" spacing={2} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Stack direction="row" spacing={2} marginLeft="auto">
                            <Button color="inherit">Anasayfa</Button>
                            <Button color="inherit">Hakkımda</Button>
                            <Button color="inherit">Ürünler</Button>
                            <Button color="inherit">İletişim</Button>
                        </Stack>
                        <Button color="inherit">Login</Button>

                    </Toolbar>

                </AppBar>
            </Box>

        </div>
    )
}

export default MUIAppbar