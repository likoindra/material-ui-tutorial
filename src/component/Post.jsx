import React from 'react'
import { makeStyles } from '@mui/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { Container, Typography, Button } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
        height: 150
    }
  },
}))

const Post = () => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1636308071574-67770df28a76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
          title="My Post"
        />
        <CardContent>
          {/* gutteButtom same like margin buttom it just different naming in MUI */}
          <Typography gutterBottom variant="h5">
            {' '}
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatibus delectus iste aut. Nisi placeat animi recusandae sit
            quisquam qui tempore, tempora, odit consequatur voluptatibus
            eligendi earum rem amet vel. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nisi voluptatibus delectus iste aut. Nisi placeat
            animi recusandae sit quisquam qui tempore, tempora, odit consequatur
            voluptatibus eligendi earum rem amet vel.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share{' '}
        </Button>
        <Button size="small" color="primary">
          {' '}
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
