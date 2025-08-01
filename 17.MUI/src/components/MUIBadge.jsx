import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';


function MUIBadge() {
  return (
    <div>
        <Badge badgeContent={5} max={9} color="primary" sx={{ marginTop: 2 }}>
            <MailIcon />
        </Badge>
    </div>
  )
}

export default MUIBadge