import React, { useEffect, useState } from 'react'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';

function Loading() {

    const {loading} = useSelector((store) => store.product);

    return (
        <Backdrop open={loading} sx={{ color: '#fff', zIndex: (theme) => 
        theme.zIndex.drawer + 1 }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}

export default Loading