import React from 'react'
import { TextField, InputAdornment } from '@mui/material'   
import PersonIcon from '@mui/icons-material/Person'

function MUITextField() {
    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="medium" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="large" />
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" color="primary" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="medium" color="secondary" />
                <TextField id="outlined-basic" label="Outlined" variant="outlined" size="large" color="error" />
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="standard" helperText="Please enter your name" />
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField id="outlined-basic" label="Outlined" variant="standard" disabled />
                <TextField id="outlined-basic" label="Outlined" variant="standard" error />
                <TextField id="outlined-basic" label="Outlined" variant="standard" required />
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <TextField  variant="standard" InputProps={{endAdornment: <InputAdornment position="end"><PersonIcon /></InputAdornment>}}/>
                <TextField  variant="standard" InputProps={{startAdornment: <InputAdornment position="start"><PersonIcon /></InputAdornment>}}/>

            </div>
        </div>

    )
}

export default MUITextField