import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import camaro from '../images/foto.jpg'

function MUICard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={camaro}
        title="Camaro"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Camaro
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Camaro is a car
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

export default MUICard