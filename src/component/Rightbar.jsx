import React from 'react'
import { makeStyles } from '@mui/styles'
import { Container, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import ImageList from '@mui/material/ImageList'
import Divider from '@mui/material/Divider'
import ImageListItem from '@mui/material/ImageListItem'
import Link from '@mui/material/Link'
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    // position: 'sticky',
    display: 'flex',
  },
  avatarGroup: {
    // display: 'flex',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: '#555',
    // marginBottom: 40,
  },
  link: {
    marginRight: theme.spacing(2),
    color: '#555',
    fontSize: 16,
  },
}))

function Rightbar() {
  const classes = useStyles()
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>Online Friends</Typography>
      <AvatarGroup
        max={6}
        style={{ marginBottom: 20 }}
        className={classes.avatarGroup}
        // style={{ display: 'flex', justifyContent: 'flex-start' }}
      >
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList
        // ini belum resposinve
        // variant="masonry"
        rowHeight={100}
        cols={2}
        // gap={8}
        style={{ marginBottom: 20, overflow: 'hidden' }}
      >
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1589118949245-7d38baf380d6?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format"
            loading="lazy"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} style={{ marginBottom: 16 }}>
        Categories
      </Typography>
      {/* <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Sport
      </Link>
      <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Food
      </Link>
      <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Music
      </Link>
      <Divider flexItem light style={{ marginBottom: 5 }} />
      <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Movies
      </Link>
      <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Sci-fi
      </Link>
      <Link
        href="#"
        style={{ marginRight: 16, color: '#555', fontSize: 16 }}
        variant="body2"
      >
        Life
      </Link> */}
    </Container>
  )
}

export default Rightbar
