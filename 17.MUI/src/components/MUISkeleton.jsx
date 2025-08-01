import React, { useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton';
import camaro from '../images/foto.jpg'

function MUISkeleton() {
    const [loading, setLoading] = React.useState(true);
    
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2500);
    }, []);
    return (
        <div>
            {loading ? <Skeleton variant="rounded" width={250} height={150} animation="wave" /> : 
            <img src={camaro} alt="camaro" style={{ width: 250, height: 150 }} />}
        </div>
    )
}

export default MUISkeleton