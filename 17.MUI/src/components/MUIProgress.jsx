import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function MUIProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);
    return (
        <div>
            <Box sx={{ display: 'flex', marginTop: 2, justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
            <Stack sx={{ color: 'grey.500', marginTop: 2, justifyContent: 'center' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>
            <Stack spacing={2} direction="row" sx={{ marginTop: 2, justifyContent: 'center' }}>
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
            </Stack>
            <Stack sx={{ width: '100%', color: 'grey.500', marginTop: 2, justifyContent: 'center', padding: 5 }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
        </div>
    )
}

export default MUIProgress