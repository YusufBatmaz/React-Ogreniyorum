import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccirdion() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam excepturi eligendi dolorem quod hic mollitia fugiat provident similique, ab impedit facere reprehenderit sint sapiente eos consequatur vero voluptas nesciunt eveniet?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam excepturi eligendi dolorem quod hic mollitia fugiat provident similique, ab impedit facere reprehenderit sint sapiente eos consequatur vero voluptas nesciunt eveniet?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam excepturi eligendi dolorem quod hic mollitia fugiat provident similique, ab impedit facere reprehenderit sint sapiente eos consequatur vero voluptas nesciunt eveniet?</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccirdion