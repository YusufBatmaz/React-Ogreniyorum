import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
  return (
    <div>
        <Stack direction="row" spacing={2}>
            <Avatar src="https://randomuser.me/api/portraits/men/21.jpg" sx={{ width: 100, height: 100 }} />
            <Avatar sx={{ width: 100, height: 100 }}>YB</Avatar>
        </Stack>
    </div>
  )
}

export default MUIAvatar