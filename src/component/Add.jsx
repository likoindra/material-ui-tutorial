import React, { useState } from 'react'
import Fab from '@mui/material/Fab'
import { makeStyles } from '@mui/styles'
import Tooltip from '@mui/material/Tooltip'
import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { Container, MenuItem } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
// import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'

const useStyles = makeStyles((theme) => ({
  //   containerTool: {
  //     position: 'fixed',
  //     top: 20,
  //     right: 20,
  //   },
  iconButton: {
    bottom: 20,
    right: 20,
  },
  containerModal: {
    width: 500,
    height: 550,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vh',
      height: '100vh',
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}))

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

const Add = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenAlert(false)
  }
  return (
    <>
      {' '}
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab
          color="primary"
          className={classes.iconButton}
          style={{ position: 'fixed' }}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.containerModal} style={{ width: 500 }}>
          {' '}
          <form action="" className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                variant="standard"
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: '100%' }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                size="small"
                style={{ width: '100%' }}
                multiline
                rows={4}
                defaultValue="Tell your story... "
                variant="outlined"
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibilty" value="Public">
                <MenuItem value="Public"> Public</MenuItem>
                <MenuItem value="Private"> Private</MenuItem>
                <MenuItem value="Unlisted"> Unlisted</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everybody"
                  control={<Radio size="small" />}
                  label="Everybody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  disabled
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <Alert onClose={handleClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>
    </>
  )
}

export default Add
