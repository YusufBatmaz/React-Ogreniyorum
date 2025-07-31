import React from 'react'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function MUIButton() {
    return (
        <div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Button variant="contained">Click me</Button>
                <Button variant="outlined">Click me</Button>
                <Button variant="text">Click me</Button>
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Button variant="contained" color="primary">Click me</Button>
                <Button variant="outlined" color="secondary">Click me</Button>
                <Button variant="text" color="error">Click me</Button>
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Button variant="contained" color="primary" size="small">Click me</Button>
                <Button variant="outlined" color="secondary" size="medium">Click me</Button>
                <Button variant="text" color="error" size="large">Click me</Button>
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Button variant="contained" color="primary" size="small">Click me</Button>
                <Button variant="outlined" color="secondary" size="medium">Click me</Button>
                <Button variant="text" color="error" size="large">Click me</Button>
                <Button variant="contained" color="success" size="small">Click me</Button>
            </div>
            <div style={{ display: 'flex', gap: '10px', margin: '10px' }}>
                <Button variant="contained" color="primary" size="small" startIcon={<AddIcon />}>Click me</Button>
                <Button variant="contained" color="primary" size="small" endIcon={<AddIcon />}>Click me</Button>
            </div>
        </div>
    )
}

export default MUIButton