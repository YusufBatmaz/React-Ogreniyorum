import React from 'react'
import { Checkbox, FormControl, FormLabel, FormGroup, FormControlLabel } from '@mui/material'

function MUICheckbox() {
  return (
    <div>
        <FormControl>
            <FormLabel>Checkbox</FormLabel>
            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked disabled/>} label="İlkokul" />
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Ortaokul" />
                <FormControlLabel control={<Checkbox />} label="Lise" />
                <FormControlLabel control={<Checkbox />} label="Üniversite" />
                <FormControlLabel control={<Checkbox />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='secondary' />} label="Doktora" />
                <FormControlLabel control={<Checkbox color='error'/>} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='success' />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='warning' />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='info' />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='default' />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='primary' />} label="Yüksek Lisans" />
                <FormControlLabel control={<Checkbox color='secondary' />} label="Yüksek Lisans" />
            </FormGroup>
        </FormControl>
    </div>
  )
}

export default MUICheckbox