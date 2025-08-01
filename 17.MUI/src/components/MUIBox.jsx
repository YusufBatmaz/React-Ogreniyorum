import React from 'react'
import { Box } from '@mui/material'

function MUIBox() {
    return (
        <div>
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
            </Box>
            <Box component="article" sx={{ p: 2, border: '1px dashed grey' }}></Box>
            
            <Box
                sx={{
                    width: 100,
                    height: 100,
                    borderRadius: 1,
                    bgcolor: 'primary.main',
                    '&:hover': {
                        bgcolor: 'primary.dark',
                    },
                }}
            />
        </div>

    )
}

export default MUIBox