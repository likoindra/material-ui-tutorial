import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { AppBar, InputBase, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { alpha } from '@mui/material/styles'
import Badge from '@mui/material/Badge'
import MailIcon from '@mui/icons-material/Mail'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Avatar from '@mui/material/Avatar'
import CancelIcon from '@mui/icons-material/Cancel'
import { deepOrange, deepPurple } from '@mui/material/colors'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
  },
  cancel: {
    [theme.breakpoints.up('sm')]: {
      display: 'none !important',
      //   visibility: 'hidden',
      //   backgroundColor: '#002884',
    },
  },
  searchButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none !important ',
      //   visibility: 'hidden',
      //   backgroundColor: '#002884',
    },
  },
  icons: {
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}))

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const classes = useStyles({ open })
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          CHATFOR
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          forChat ?
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={classes.input} />
          <CancelIcon
            className={classes.cancel}
            onClick={() => setOpen(false)}
          />
        </div>
        <div className={classes.icons}>
          <SearchIcon
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <NotificationsIcon />
          </Badge>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </div>
      </Toolbar>
    </AppBar>
    // <AppBar position="fixed">
    //   <Toolbar className={classes.toolbar}>
    //     <Typography variant="h6" className={classes.logoLg}>
    //       Chat for ?
    //     </Typography>
    //     <Typography variant="h6" className={classes.logoSm}>
    //       FORCHAT?
    //     </Typography>
    //     <div className={classes.search}>
    //       <SearchIcon />
    //       <InputBase placeholder="Search..." className={classes.input} />
    //       <CancelIcon
    //         className={classes.cancel}
    //         onClick={() => setOpen(false)}
    //       />
    //     </div>
    //     <div className={classes.icons}>
    //       <SearchIcon
    //         className={classes.searchButton}
    //         onClick={() => setOpen(true)}
    //       />
    //       <Badge badgeContent={4} color="secondary" className={classes.badge}>
    //         <MailIcon />
    //       </Badge>
    //       <Badge badgeContent={4} color="secondary" className={classes.badge}>
    //         <NotificationsIcon />
    //       </Badge>
    //       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    //     </div>
    //   </Toolbar>
    // </AppBar>
  )
}

export default Navbar
