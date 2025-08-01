import React, { useState } from 'react'
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material'

function MUISelect() {
    const [currency, setCurrency] = useState('')
    return (
    <div>
        <FormControl sx={{width: '200px'}}>
            <InputLabel>Para Birimi</InputLabel>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
                <MenuItem value="TRY">TRY</MenuItem>
            </Select>
        </FormControl>
    </div>
  )
}

export default MUISelect